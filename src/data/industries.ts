export interface IndustryItem {
  id: string;
  name: string;
  code: string;
  tagline: string;
  accent: string;
  challenge: string;
  solution: string;
  workflowSteps: { step: string; title: string; desc: string }[];
  keyCapabilities: string[];
  governanceNote: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Ops',
    code: 'IND-HC',
    tagline: 'Administrative streamlining & clinical document intelligence',
    accent: '#10B981',
    challenge:
      'Clinical personnel spend 40% of their operational hours parsing unstructured intake records, prior-authorization dossiers, and disparate laboratory reports, creating severe administrative fatigue.',
    solution:
      'We engineer secure, HIPAA-compliant document intelligence pipelines that extract structured clinical entities, reconcile physician notes, and draft prior-authorization packets for human clinician review.',
    workflowSteps: [
      {
        step: '01',
        title: 'Intake Ingestion & PII Scrubbing',
        desc: 'Incoming faxes, PDFs, and EHR notes pass through a hardened cryptographic gateway that redacts non-essential identifiers.',
      },
      {
        step: '02',
        title: 'Hierarchical Clinical Extraction',
        desc: 'Domain-tuned vision and NLP models extract diagnoses, treatment histories, and billing codes into structured JSON schemas.',
      },
      {
        step: '03',
        title: 'Cross-Verification & Grounding',
        desc: 'Extracted terms are cross-referenced against ICD-10 and CPT vocabularies with explicit coordinate citations back to the source document.',
      },
      {
        step: '04',
        title: 'Clinician Approval & EHR Commit',
        desc: 'Staff inspect high-confidence summaries in an ergonomic review cockpit before pushing validated records into the primary EHR.',
      },
    ],
    keyCapabilities: ['Knowledge Systems & RAG', 'Document Intelligence', 'Custom Enterprise Software'],
    governanceNote:
      'Systems operate in administrative support roles; autonomous clinical decisions are strictly outside scope.',
  },
  {
    id: 'finance',
    name: 'Finance & Quantitative Ops',
    code: 'IND-FIN',
    tagline: 'High-throughput document verification & decision support',
    accent: '#F59E0B',
    challenge:
      'Underwriting and compliance teams face thousands of unstructured commercial loan filings, quarterly audits, and regulatory circulars with strict turn-around deadlines.',
    solution:
      'Intelligent underwriting assistance engines that ingest dense financial tables, compute debt-to-equity and ratio models deterministically, and cross-reference regulatory policy books.',
    workflowSteps: [
      {
        step: '01',
        title: 'Multi-Format Financial Parsing',
        desc: 'Complex tables, balance sheets, and footnotes from 10-Ks and tax returns are parsed with cell-level coordinate fidelity.',
      },
      {
        step: '02',
        title: 'Deterministic Ratio Computation',
        desc: 'Mathematical computations are delegated to Python runtimes rather than raw LLMs to prevent numerical hallucinations.',
      },
      {
        step: '03',
        title: 'Policy Compliance Synthesis',
        desc: 'Retrieved applicant financials are evaluated against internal underwriting manuals with highlighted anomaly flags.',
      },
      {
        step: '04',
        title: 'Underwriter Dossier Assembly',
        desc: 'A comprehensive, auditable recommendation memorandum is prepared for investment committee deliberation.',
      },
    ],
    keyCapabilities: ['Data Intelligence', 'Knowledge Systems & RAG', 'AI Systems Engineering'],
    governanceNote:
      'Provides decision support and automated verification; does not offer speculative trading signals or guaranteed outcomes.',
  },
  {
    id: 'marketing',
    name: 'Marketing & Content Operations',
    code: 'IND-MKT',
    tagline: 'Multi-channel asset orchestration & customer data intelligence',
    accent: '#E11D48',
    challenge:
      'Global marketing organizations struggle to maintain localized brand voice, coordinate cross-channel campaigns, and glean timely qualitative insights from customer feedback.',
    solution:
      'Agentic content pipelines that draft, evaluate, and adapt multi-lingual campaign collateral against strict brand guardrails while ingesting real-time sentiment streams.',
    workflowSteps: [
      {
        step: '01',
        title: 'Brand Vector Constitution Ingestion',
        desc: 'Tone-of-voice rules, banned terminology, and visual guidelines are codified into programmatic prompt constraints.',
      },
      {
        step: '02',
        title: 'Collaborative Multi-Agent Drafting',
        desc: 'A strategist agent creates angle variations, a writer agent drafts localized copy, and a critic agent audits tone compliance.',
      },
      {
        step: '03',
        title: 'Asset Formatting & Tool Delivery',
        desc: 'Approved variants are automatically formatted for CMS, email marketing platforms, and ad networks.',
      },
      {
        step: '04',
        title: 'Performance Signal Loop',
        desc: 'Engagement telemetry feeds back into the prompt lattice to iteratively sharpen messaging recommendations.',
      },
    ],
    keyCapabilities: ['Agentic AI & Workflows', 'Custom AI Software', 'Data Intelligence'],
    governanceNote:
      'All published materials require human marketing team checkpoint sign-off prior to external broadcasting.',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Asset Operations',
    code: 'IND-RE',
    tagline: 'Property intelligence, lease parsing & high-velocity lead workflows',
    accent: '#0EA5E9',
    challenge:
      'Brokerages and asset managers manage fragmented portfolios with leases buried in PDF stacks while struggling to qualify high-volume inbound buyer inquiries instantly.',
    solution:
      'Unified property data systems combining automated lease clause extraction, zoning intelligence, and intelligent conversational qualification engines.',
    workflowSteps: [
      {
        step: '01',
        title: 'Commercial Lease Abstraction',
        desc: 'Hundreds of lease agreements are scanned to extract termination clauses, escalation covenants, and maintenance covenants.',
      },
      {
        step: '02',
        title: 'Portfolio Geospatial Indexing',
        desc: 'Property specs, tenant rollouts, and municipal records are combined into an instantly queryable asset graph.',
      },
      {
        step: '03',
        title: 'Inquiry Qualification Engine',
        desc: 'Prospective buyer and tenant inquiries are triaged 24/7, matching criteria against vacant inventory in real time.',
      },
      {
        step: '04',
        title: 'Broker Calendar Synchronization',
        desc: 'Qualified parties are automatically routed to the lead broker with verified dossiers ready for site visits.',
      },
    ],
    keyCapabilities: ['Document Intelligence', 'Agentic AI & Workflows', 'Systems & Products (LeadFlow)'],
    governanceNote:
      'Integrates seamlessly with LeadFlow for rapid tenant acquisition and multi-channel lead routing.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Logistics',
    code: 'IND-MFG',
    tagline: 'Supply chain telemetry synthesis & preventive operational coordination',
    accent: '#10B981',
    challenge:
      'Plant operators and logistics coordinators navigate disparate SCADA alerts, transport telematics, and supplier disruption notices across disconnected legacy software.',
    solution:
      'Real-time operational coordination engines that synthesize sensor anomalies, predict bottleneck cascading, and orchestrate mitigation work orders.',
    workflowSteps: [
      {
        step: '01',
        title: 'Telemetry & IoT Stream Ingestion',
        desc: 'Continuous vibration, temperature, and fleet GPS feeds are processed through low-latency edge buffers.',
      },
      {
        step: '02',
        title: 'Causal Anomaly Classification',
        desc: 'Time-series models correlate sensor drift with maintenance logbooks to differentiate sensor noise from hardware wear.',
      },
      {
        step: '03',
        title: 'Automated Work Order Formulation',
        desc: 'System drafts maintenance tickets specifying exact component part numbers, schematics, and technician protocols.',
      },
      {
        step: '04',
        title: 'Supply Chain Dynamic Rerouting',
        desc: 'Alternative freight routes are identified and presented to dispatchers when port or transit delays exceed safety thresholds.',
      },
    ],
    keyCapabilities: ['Data Intelligence', 'AI Systems Engineering', 'Intelligent Infrastructure'],
    governanceNote:
      'Hardware execution triggers always require supervisor physical verification on the production floor.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Professional Services',
    code: 'IND-ENT',
    tagline: 'Organizational knowledge fabric & bespoke workflow automation',
    accent: '#A855F7',
    challenge:
      'Consulting, legal, and engineering firms lose thousands of billable hours recreating precedent work, searching internal file shares, and assembling client deliverables manually.',
    solution:
      'A private enterprise knowledge fabric that indexes past work products, briefs, and codebases into an intelligent research and drafting assistant.',
    workflowSteps: [
      {
        step: '01',
        title: 'Cross-System Repository Indexing',
        desc: 'SharePoint, Google Drive, Jira, and GitHub repositories are continuously ingested with strict RBAC preservation.',
      },
      {
        step: '02',
        title: 'Contextual Semantic Search',
        desc: 'Associates query complex precedent topics and receive precise excerpts with direct deep links to historical deliverables.',
      },
      {
        step: '03',
        title: 'Draft Synthesis & Precedent Injection',
        desc: 'System drafts structured engagement proposals and audit memorandums drawing upon institutional best practices.',
      },
      {
        step: '04',
        title: 'Strict Data Privacy Firewall',
        desc: 'Zero data retention protocols ensure proprietary client files never train public foundational models.',
      },
    ],
    keyCapabilities: ['Knowledge Systems & Enterprise RAG', 'Agentic AI & Workflows', 'Custom AI Software'],
    governanceNote:
      'Guarantees complete client confidentiality with tenant-isolated vector namespaces and zero-logging configurations.',
  },
];
