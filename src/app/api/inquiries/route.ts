import { createHmac } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseServer } from '@/lib/supabase/server';

export const runtime = 'nodejs';
const MAX_BODY_BYTES = 8 * 1024;
const ALLOWED_ORIGINS = [process.env.NEXT_PUBLIC_SITE_URL, process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined].filter((value): value is string => Boolean(value));
const domains = ['Enterprise Services', 'Healthcare & Clinical Ops', 'Finance & Quant Ops', 'Real Estate Intelligence', 'Manufacturing & Logistics', 'Marketing Operations'] as const;
const scopes = ['AI Systems Engineering', 'Agentic AI & Workflows', 'Knowledge Systems & RAG', 'Custom AI Software', 'LeadFlow Instance', 'Intelligent Infrastructure'] as const;
const timelines = ['Urgent (<30 Days)', '30-90 Days', 'Quarterly Roadmap', 'Discovery & Exploration'] as const;
const inquirySchema = z.object({
  name: z.string().trim().min(1).max(120), email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
  company: z.string().trim().min(1).max(160), domain: z.enum(domains), scope: z.enum(scopes), timeline: z.enum(timelines),
  problemStatement: z.string().trim().min(20).max(5000), company_website_check: z.string().max(500).optional(),
});
function jsonError(message: string, status: number, details?: unknown) { return NextResponse.json({ error: message, details }, { status }); }

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > MAX_BODY_BYTES) return jsonError('Request is too large.', 413);
  if (!(request.headers.get('content-type') ?? '').toLowerCase().includes('application/json')) return jsonError('Content-Type must be application/json.', 415);
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin && !ALLOWED_ORIGINS.includes(origin)) return jsonError('Request origin is not allowed.', 403);
  const idempotencyKey = request.headers.get('idempotency-key');
  if (!idempotencyKey || !z.string().uuid().safeParse(idempotencyKey).success) return jsonError('A valid submission identifier is required.', 400);

  let rawBody: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return jsonError('Request body is required.', 400);
    const chunks: Uint8Array[] = [];
    let byteLength = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      byteLength += value.byteLength;
      if (byteLength > MAX_BODY_BYTES) {
        await reader.cancel();
        return jsonError('Request is too large.', 413);
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(byteLength);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    rawBody = JSON.parse(new TextDecoder().decode(bytes));
  } catch { return jsonError('Request body must contain valid JSON.', 400); }
  const parsed = inquirySchema.safeParse(rawBody);
  if (!parsed.success) return jsonError('Please correct the highlighted fields and try again.', 400, parsed.error.issues.map(({ path, message }) => ({ field: path.join('.'), message })));
  if (parsed.data.company_website_check) return jsonError('Unable to process this submission.', 400);

  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientIp = forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
  const rateLimitKey = createHmac('sha256', process.env.SUPABASE_SERVICE_ROLE_KEY!).update(clientIp).digest('hex');
  const { data: allowed, error: rateLimitError } = await supabaseServer.rpc('consume_inquiry_rate_limit', { p_key: rateLimitKey, p_window_seconds: 3600, p_max_requests: 5 });
  if (rateLimitError) { console.error('Inquiry rate limit check failed.'); return jsonError('We could not submit your inquiry right now. Please try again shortly.', 503); }
  if (!allowed) return jsonError('Too many submissions. Please try again later.', 429);

  const { data, error } = await supabaseServer.from('inquiries').upsert({
    name: parsed.data.name, email: parsed.data.email, company: parsed.data.company, domain: parsed.data.domain,
    scope: parsed.data.scope, timeline: parsed.data.timeline, problem_statement: parsed.data.problemStatement, idempotency_key: idempotencyKey,
  }, { onConflict: 'idempotency_key', ignoreDuplicates: true }).select('id').maybeSingle();
  if (error) { console.error('Inquiry database insert failed.'); return jsonError('We could not save your inquiry. Please try again.', 503); }
  if (data?.id) return NextResponse.json({ ok: true, id: data.id }, { status: 201 });
  const { data: existing, error: lookupError } = await supabaseServer.from('inquiries')
    .select('id, name, email, company, domain, scope, timeline, problem_statement')
    .eq('idempotency_key', idempotencyKey).maybeSingle();
  if (lookupError || !existing?.id) return jsonError('We could not confirm your inquiry was saved. Please try again.', 503);
  const matches = existing.name === parsed.data.name && existing.email === parsed.data.email &&
    existing.company === parsed.data.company && existing.domain === parsed.data.domain &&
    existing.scope === parsed.data.scope && existing.timeline === parsed.data.timeline &&
    existing.problem_statement === parsed.data.problemStatement;
  if (!matches) return jsonError('This submission identifier was already used. Refresh the form and try again.', 409);
  return NextResponse.json({ ok: true, id: existing.id }, { status: 200 });
}
