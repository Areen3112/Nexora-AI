'use client';

import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Send,
  CheckCircle,
  Copy,
  Terminal,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './Inquiry.module.scss';

export const Inquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    domain: 'Enterprise Services',
    scope: 'AI Systems Engineering',
    timeline: '30-90 Days',
    problemStatement: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [companyWebsiteCheck, setCompanyWebsiteCheck] = useState('');
  const inFlight = useRef(false);
  const idempotencyKey = useRef<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const domains = [
    'Enterprise Services',
    'Healthcare & Clinical Ops',
    'Finance & Quant Ops',
    'Real Estate Intelligence',
    'Manufacturing & Logistics',
    'Marketing Operations',
  ];

  const scopes = [
    'AI Systems Engineering',
    'Agentic AI & Workflows',
    'Knowledge Systems & RAG',
    'Custom AI Software',
    'LeadFlow Instance',
    'Intelligent Infrastructure',
  ];

  const timelines = ['Urgent (<30 Days)', '30-90 Days', 'Quarterly Roadmap', 'Discovery & Exploration'];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!formData.company.trim()) errs.company = 'Please specify your company or organization.';
    if (!formData.problemStatement.trim() || formData.problemStatement.length < 20) {
      errs.problemStatement = 'Please provide a brief problem description (at least 20 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const updateFormData = (next: typeof formData) => {
    setFormData(next);
    idempotencyKey.current = '';
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current || !validate()) return;
    inFlight.current = true;
    setSubmitting(true);
    setSubmitError('');
    if (!idempotencyKey.current) idempotencyKey.current = crypto.randomUUID();
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Idempotency-Key': idempotencyKey.current },
        body: JSON.stringify({ ...formData, company_website_check: companyWebsiteCheck }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        const fieldErrors = Array.isArray(result?.details) ? result.details as { field: string; message: string }[] : [];
        const nextErrors = Object.fromEntries(fieldErrors.map((item) => [item.field, item.message]));
        if (Object.keys(nextErrors).length) setErrors(nextErrors);
        throw new Error(result?.error || 'We could not submit your inquiry. Please try again.');
      }
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'We could not submit your inquiry. Please try again.');
    } finally {
      inFlight.current = false;
      setSubmitting(false);
    }
  };

  const copyBrief = () => {
    const brief = `NEXORA AI // ARCHITECTURAL INQUIRY SPECIFICATION
--------------------------------------------------
Lead Contact: ${formData.name} (${formData.email})
Company: ${formData.company}
Target Domain: ${formData.domain}
Primary Scope: ${formData.scope}
Target Timeline: ${formData.timeline}

PROBLEM SPECIFICATION:
${formData.problemStatement}
--------------------------------------------------
Generated via Nexora AI Architectural Portal`;

    navigator.clipboard.writeText(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="inquiry" className={styles.section} aria-label="Project Inquiry">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>START A DIALOGUE // ARCHITECTURAL CONSULTATION</span>
          </div>
          <h2 className={styles.title}>
            Bring us the problem. <em>Let's engineer the system.</em>
          </h2>
          <p className={styles.description}>
            Whether you are struggling with messy unstructured data, fragile manual workflows, or ambitious software products, our engineering team is ready to analyze your constraints and architect a production-grade solution.
          </p>
        </div>

        {/* Form and Preview Layout */}
        <div className={styles.inquiryGrid}>
          {/* Left: Interactive Form */}
          <div className={styles.formCol}>
            <Card className={styles.formCard} brackets>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIconBox}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 className={styles.successTitle}>Inquiry Received</h3>
                  <p className={styles.successDesc}>
                    Your inquiry was saved securely. Your project specification is ready to review below.
                  </p>

                  <div className={styles.briefPreviewBox}>
                    <div className={styles.briefBar}>
                      <span className={styles.briefTag}>SPECIFICATION PREVIEW</span>
                      <button onClick={copyBrief} className={styles.copyBtn}>
                        <Copy size={13} />
                        <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY SPECIFICATION'}</span>
                      </button>
                    </div>
                    <pre className={styles.briefCode}>
                      {`NEXORA AI // INQUIRY BRIEF
CONTACT: ${formData.name} <${formData.email}>
ORGANIZATION: ${formData.company}
DOMAIN: ${formData.domain}
SCOPE: ${formData.scope}
TIMELINE: ${formData.timeline}

PROBLEM STATEMENT:
${formData.problemStatement}`}
                    </pre>
                  </div>

                  <div className={styles.configNotice}>
                    <Terminal size={14} className={styles.configIcon} />
                    <span>
                      <strong>DATABASE CONFIRMED:</strong> Your inquiry has been stored securely so the Nexora AI team can respond. Your details are retained securely and used to respond to your request.
                    </span>
                  </div>

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => { setSubmitted(false); idempotencyKey.current = ''; }}
                    className={styles.resetBtn}
                  >
                    Edit Specifications
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.inquiryForm} noValidate>
                  <div aria-hidden="true" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)' }}>
                    <label htmlFor="inquiry-company-website-check">Leave this field empty</label>
                    <input id="inquiry-company-website-check" name="company_website_check" tabIndex={-1} autoComplete="new-password" autoCapitalize="off" autoCorrect="off" spellCheck={false} data-1p-ignore="true" data-lpignore="true" value={companyWebsiteCheck} onChange={(e) => setCompanyWebsiteCheck(e.target.value)} />
                  </div>
                  {/* Scope Selector */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>PRIMARY CAPABILITY SCOPE</label>
                    <div className={styles.pillGrid}>
                      {scopes.map((s) => (
                        <button
                          type="button"
                          key={s}
                          className={clsx(styles.pillBtn, formData.scope === s && styles.pillActive)}
                          onClick={() => updateFormData({ ...formData, scope: s })}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Domain Selector */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>INDUSTRY VERTICAL</label>
                    <div className={styles.pillGrid}>
                      {domains.map((d) => (
                        <button
                          type="button"
                          key={d}
                          className={clsx(styles.pillBtn, formData.domain === d && styles.pillActive)}
                          onClick={() => updateFormData({ ...formData, domain: d })}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Two Column Inputs */}
                  <div className={styles.inputRow}>
                    <div className={styles.fieldBox}>
                      <label htmlFor="inquiry-name" className={styles.inputLabel}>
                        YOUR NAME *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        placeholder="e.g. Dr. Elena Vance"
                        value={formData.name}
                        onChange={(e) => updateFormData({ ...formData, name: e.target.value })}
                        className={clsx(styles.textInput, errors.name && styles.hasError)}
                      />
                      {errors.name && <span className={styles.errMessage}>{errors.name}</span>}
                    </div>

                    <div className={styles.fieldBox}>
                      <label htmlFor="inquiry-email" className={styles.inputLabel}>
                        WORK EMAIL *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        placeholder="e.g. elena@enterprise.io"
                        value={formData.email}
                        onChange={(e) => updateFormData({ ...formData, email: e.target.value })}
                        className={clsx(styles.textInput, errors.email && styles.hasError)}
                      />
                      {errors.email && <span className={styles.errMessage}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.fieldBox}>
                      <label htmlFor="inquiry-company" className={styles.inputLabel}>
                        COMPANY / ORGANIZATION *
                      </label>
                      <input
                        id="inquiry-company"
                        type="text"
                        placeholder="e.g. Black Mesa Logistics"
                        value={formData.company}
                        onChange={(e) => updateFormData({ ...formData, company: e.target.value })}
                        className={clsx(styles.textInput, errors.company && styles.hasError)}
                      />
                      {errors.company && <span className={styles.errMessage}>{errors.company}</span>}
                    </div>

                    <div className={styles.fieldBox}>
                      <label className={styles.inputLabel}>DEPLOYMENT TIMELINE</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => updateFormData({ ...formData, timeline: e.target.value })}
                        className={styles.selectInput}
                      >
                        {timelines.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div className={styles.formGroup}>
                    <label htmlFor="inquiry-problem" className={styles.inputLabel}>
                      DECONSTRUCT YOUR PROBLEM OR SYSTEM GOAL *
                    </label>
                    <textarea
                      id="inquiry-problem"
                      rows={4}
                      placeholder="Describe your operational friction, data bottlenecks, existing software dependencies, and desired outcomes..."
                      value={formData.problemStatement}
                      onChange={(e) => updateFormData({ ...formData, problemStatement: e.target.value })}
                      className={clsx(styles.textArea, errors.problemStatement && styles.hasError)}
                    />
                    {errors.problemStatement && (
                      <span className={styles.errMessage}>{errors.problemStatement}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className={styles.formFoot}>
                    <Button type="submit" variant="primary" size="lg" withArrow disabled={submitting}>
                      {submitting ? 'Submitting Inquiry…' : 'Generate Architectural Brief'}
                    </Button>
                    {submitError && <p role="alert" className={styles.errMessage}>{submitError}</p>}
                    <div className={styles.privacyGuarantee}>
                      <ShieldCheck size={14} className={styles.privacyIcon} />
                      <span>Inquiry details are retained securely to respond to your request</span>
                    </div>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Right: Architectural Consultation Guarantees */}
          <div className={styles.sidebarCol}>
            <div className={styles.sidebarPanel}>
              <h4 className={styles.sidebarTitle}>What Happens Next</h4>
              <ol className={styles.consultSteps}>
                <li>
                  <span className={styles.stepNum}>01</span>
                  <div>
                    <h5>Technical Constraint Review</h5>
                    <p>An AI Systems Architect reviews your data topology and feasibility within 24 business hours.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.stepNum}>02</span>
                  <div>
                    <h5>Architecture Alignment Session</h5>
                    <p>A 45-minute technical deep-dive into model selection, security bounds, and state orchestration.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.stepNum}>03</span>
                  <div>
                    <h5>Deterministic Execution Plan</h5>
                    <p>A formal roadmap with milestones, benchmark evaluations, and fixed timeline budgets.</p>
                  </div>
                </li>
              </ol>

              <div className={styles.sidebarBox}>
                <span className={styles.boxTag}>OUR PLEDGE</span>
                <p>
                  No sales pressure, no generic chatbot pitches. You talk directly to software engineers and systems architects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
