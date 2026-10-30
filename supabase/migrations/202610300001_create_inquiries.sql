create extension if not exists pgcrypto;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  company text not null check (char_length(company) between 1 and 160),
  domain text not null check (domain in ('Enterprise Services', 'Healthcare & Clinical Ops', 'Finance & Quant Ops', 'Real Estate Intelligence', 'Manufacturing & Logistics', 'Marketing Operations')),
  scope text not null check (scope in ('AI Systems Engineering', 'Agentic AI & Workflows', 'Knowledge Systems & RAG', 'Custom AI Software', 'LeadFlow Instance', 'Intelligent Infrastructure')),
  timeline text not null check (timeline in ('Urgent (<30 Days)', '30-90 Days', 'Quarterly Roadmap', 'Discovery & Exploration')),
  problem_statement text not null check (char_length(problem_statement) between 20 and 5000),
  status text not null default 'New' check (char_length(status) between 1 and 40),
  idempotency_key uuid not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.inquiries enable row level security;
create or replace function public.set_inquiries_updated_at()
returns trigger language plpgsql set search_path = pg_catalog as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
create trigger inquiries_set_updated_at before update on public.inquiries
for each row execute function public.set_inquiries_updated_at();
-- No client-facing read, insert, update, or delete policies are created.

create table if not exists public.inquiry_rate_limits (
  key_hash text primary key,
  window_started_at timestamptz not null,
  request_count integer not null check (request_count >= 1),
  updated_at timestamptz not null default now()
);
alter table public.inquiry_rate_limits enable row level security;

create or replace function public.consume_inquiry_rate_limit(p_key text, p_window_seconds integer, p_max_requests integer)
returns boolean language plpgsql security definer set search_path = pg_catalog, public as $$
declare v_allowed boolean;
begin
  insert into public.inquiry_rate_limits as limits (key_hash, window_started_at, request_count)
  values (p_key, clock_timestamp(), 1)
  on conflict (key_hash) do update
    set window_started_at = case when limits.window_started_at <= clock_timestamp() - make_interval(secs => p_window_seconds) then clock_timestamp() else limits.window_started_at end,
        request_count = case when limits.window_started_at <= clock_timestamp() - make_interval(secs => p_window_seconds) then 1 else limits.request_count + 1 end,
        updated_at = clock_timestamp()
  returning request_count <= p_max_requests into v_allowed;
  return v_allowed;
end;
$$;
revoke all on function public.consume_inquiry_rate_limit(text, integer, integer) from public, anon, authenticated;
grant execute on function public.consume_inquiry_rate_limit(text, integer, integer) to service_role;
revoke all on public.inquiries from anon, authenticated;
revoke all on public.inquiry_rate_limits from anon, authenticated;
grant all on public.inquiries, public.inquiry_rate_limits to service_role;
