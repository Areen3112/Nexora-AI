export interface MethodologyStage {
  step: string;
  name: string;
  phase: string;
  summary: string;
  detail: string;
  keyActivities: string[];
  artifactsProduced: string[];
  accent: string;
}

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    step: '01',
    name: 'Understand',
    phase: 'PROBLEM DECONSTRUCTION & BOUNDING',
    summary: 'Define the real problem, business metrics, and technical constraints before touching a single model.',
    detail:
      'We strip away generative AI hype to audit the actual operational bottlenecks, data quality bottlenecks, security boundaries, and latency budgets required for measurable ROI.',
    keyActivities: [
      'Operational Bottleneck & Friction Audit',
      'Data Availability, Cleanliness & Schema Assessment',
      'Regulatory & Compliance Bounding (HIPAA, SOC2, GDPR)',
      'Deterministic Success Metric Definition (p95 latency, accuracy threshold)',
    ],
    artifactsProduced: [
      'Problem Decomposition Specification',
      'Data Topology & Access Matrix',
      'Engineering Feasibility Assessment',
    ],
    accent: '#E11D48',
  },
  {
    step: '02',
    name: 'Architect',
    phase: 'SYSTEM TOPOLOGY & INTEGRATION DESIGN',
    summary: 'Design data flows, model selection trees, state machines, and fail-safe fallback circuits.',
    detail:
      'Rather than relying on monolithic LLMs, we architect hybrid systems pairing deterministic algorithms, specialized smaller models, and vector stores with explicit fallback paths.',
    keyActivities: [
      'Model Selection & Hybrid Orchestration Topology',
      'Knowledge Graph & Vector Indexing Architecture',
      'Multi-Agent Coordination & Circuit-Breaker Design',
      'Security Architecture & Token Gateway Configuration',
    ],
    artifactsProduced: [
      'Interactive Architectural Blueprints',
      'Data Flow Schematics & State Diagrams',
      'Security & RBAC Enforcement Plan',
    ],
    accent: '#0EA5E9',
  },
  {
    step: '03',
    name: 'Engineer',
    phase: 'DETERMINISTIC BUILD & MODEL SYNTHESIS',
    summary: 'Construct the software, intelligence pipelines, and automation with production rigor.',
    detail:
      'We write typed, modular backend services and reactive frontends. Prompts are treated as version-controlled code; evaluation suites test thousands of edge cases automatically.',
    keyActivities: [
      'Type-Safe Frontend & Microservice Backend Development',
      'Synthetic Benchmark Generation & Evaluation Test Harness',
      'Prompt Engineering with Unit & Regression Test Suites',
      'Vector Database Indexing & Hybrid Retrieval Tuning',
    ],
    artifactsProduced: [
      'Modular Source Code Repositories',
      'Comprehensive Automated Evaluation Test Suites',
      'Dockerized Microservice Containers',
    ],
    accent: '#10B981',
  },
  {
    step: '04',
    name: 'Integrate',
    phase: 'ENTERPRISE EMBEDDING & WORKFLOW SYNCHRONIZATION',
    summary: 'Connect the intelligent system directly into existing team tools and operational workflows.',
    detail:
      'An intelligent system is useless in a vacuum. We embed solutions directly into your everyday tools—Salesforce, SAP, Slack, custom internal dashboards, and transactional databases.',
    keyActivities: [
      'Bidirectional API Sync Connectors & Webhook Listeners',
      'Single Sign-On (SSO) & Granular Role-Based Permissions',
      'Human-in-the-Loop Review Cockpits & Exception Triage',
      'End-to-End Staging Validation & User Acceptance Testing',
    ],
    artifactsProduced: [
      'Production Integration Connectors',
      'User Onboarding & Operator Manuals',
      'Telemetry & Security Verification Dossier',
    ],
    accent: '#F59E0B',
  },
  {
    step: '05',
    name: 'Evolve',
    phase: 'CONTINUOUS MONITORING & DRIFT MITIGATION',
    summary: 'Track model drift, latency, token spend, and user feedback loops to compound system intelligence.',
    detail:
      'Production is only day one. We instrument deep telemetry to monitor distribution shift, user correction signals, and query anomalies, turning edge cases into continuous improvements.',
    keyActivities: [
      'Live Telemetry Logging (Latency, Token Cost, Failure Rates)',
      'Automated Outlier Detection & Model Drift Flagging',
      'Active Learning Loops from Human Operator Corrections',
      'Scheduled Model Upgrades & Fine-Tuning Retraining Jobs',
    ],
    artifactsProduced: [
      'Real-Time Operational Observability Dashboard',
      'Continuous Evaluation & Drift Reports',
      'Quarterly Model Optimization Recommendations',
    ],
    accent: '#A855F7',
  },
];
