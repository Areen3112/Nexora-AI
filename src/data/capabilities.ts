export interface CapabilityItem {
  id: string;
  tag: string;
  code: string;
  title: string;
  subtitle: string;
  problemSolved: string;
  systemEngineered: string;
  architecturalFit: string;
  accent: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'systems-engineering',
    tag: 'FOUNDATION',
    code: 'SYS-01',
    title: 'AI Systems Engineering',
    subtitle: 'From stochastic model calls to deterministic distributed systems',
    problemSolved:
      'Raw LLMs and AI models lack deterministic guarantees, fail under edge-case inputs, and cause silent workflow degradation when deployed without robust architecture.',
    systemEngineered:
      'Production-grade distributed pipelines featuring fault-tolerant fallback trees, stateful orchestration, strict type validation, and continuous latency budgeting.',
    architecturalFit:
      'Acts as the computational backbone connecting enterprise APIs, proprietary models, and persistence layers into a unified runtime.',
    accent: '#E11D48',
    metrics: [
      { label: 'Latency Budgeting', value: '<250ms p95' },
      { label: 'Fault Recovery', value: 'Active/Passive Failover' },
      { label: 'Validation Layer', value: 'Zero-Escape Schemas' },
    ],
    deliverables: [
      'Resilient Model Routing & Multi-Provider Balancing',
      'Deterministic State Machine Orchestration',
      'Zero-Trust Input & Output Schema Validation',
      'Distributed Caching & Vector Token Gateways',
    ],
  },
  {
    id: 'agentic-workflows',
    tag: 'ORCHESTRATION',
    code: 'AGT-02',
    title: 'Agentic AI & Multi-Step Workflows',
    subtitle: 'Autonomous execution engines with bounded human oversight',
    problemSolved:
      'Complex business operations require hundreds of interdependent micro-decisions across software tools, which single-shot prompts cannot execute reliably.',
    systemEngineered:
      'Autonomous multi-agent topologies where specialized agents (Researchers, Critics, Planners, Synthesizers) collaborate with checkpointed human-in-the-loop validation.',
    architecturalFit:
      'Coordinates operational tasks across ERPs, CRMs, internal databases, and ticketing systems without manual intervention.',
    accent: '#0EA5E9',
    metrics: [
      { label: 'Execution Model', value: 'Event-Driven Agents' },
      { label: 'Oversight Tier', value: 'Human-in-the-Loop Gates' },
      { label: 'Auditability', value: 'Full Replay Logs' },
    ],
    deliverables: [
      'Multi-Agent Choreography & Tool Use Execution',
      'ReAct & Reflection Decision Loops with Circuit Breakers',
      'Deterministic Action Rollbacks on Anomaly Detection',
      'Granular Event Tracing & Telemetry Instrumentation',
    ],
  },
  {
    id: 'knowledge-rag',
    tag: 'RETRIEVAL',
    code: 'RAG-03',
    title: 'Knowledge Systems & Enterprise RAG',
    subtitle: 'High-precision retrieval across fragmented enterprise data',
    problemSolved:
      'Standard vector search returns noisy, hallucinated, or ungrounded chunks when querying multi-thousand-page PDFs, technical specs, and legacy databases.',
    systemEngineered:
      'Hybrid dense-sparse retrieval systems with multi-stage reranking, graph-augmented knowledge indexing, and strict citation grounding.',
    architecturalFit:
      'Transforms unstructured file repositories and knowledge bases into an instantly verifiable query engine for teams and autonomous agents.',
    accent: '#10B981',
    metrics: [
      { label: 'Indexing Topology', value: 'Hybrid Graph + Vector' },
      { label: 'Reranking Engine', value: 'Cross-Encoder Scoring' },
      { label: 'Hallucination Rate', value: 'Near-Zero Grounded' },
    ],
    deliverables: [
      'Hierarchical Document Decomposition & Semantic Chunking',
      'BM25 + Dense ColBERT Hybrid Vector Pipelines',
      'Knowledge Graph Triple Extraction & Entity Linking',
      'Deterministic Source Attribution & Verification Anchors',
    ],
  },
  {
    id: 'data-intelligence',
    tag: 'DECISION SUPPORT',
    code: 'DAT-04',
    title: 'Data Intelligence & Decision Support',
    subtitle: 'Synthesizing operational signals into executive clarity',
    problemSolved:
      'Operational teams drown in telemetry, spreadsheets, and telemetry streams without the capacity to detect cross-system anomalies or forecast outcomes in real time.',
    systemEngineered:
      'Continuous streaming intelligence engines that synthesize disparate telemetry streams into structured decision trees with probabilistic confidence bands.',
    architecturalFit:
      'Sits atop data warehouses and event brokers to deliver real-time operational diagnostics and prescriptive actions.',
    accent: '#F59E0B',
    metrics: [
      { label: 'Stream Processing', value: 'Real-Time Event Sinks' },
      { label: 'Decision Logic', value: 'Bayesian Confidence Bands' },
      { label: 'Format', value: 'Structured Action Directives' },
    ],
    deliverables: [
      'Automated Telemetry Anomaly & Pattern Recognition',
      'Prescriptive Decision Trees with Sensitivity Bounds',
      'Real-Time Natural Language Query Interfaces over SQL/NoSQL',
      'Executive Briefing Generation with Source Verification',
    ],
  },
  {
    id: 'custom-software',
    tag: 'PRODUCT ENGINEERING',
    code: 'PRD-05',
    title: 'Custom AI Software & Product Development',
    subtitle: 'End-to-end intelligent applications tailored to domain constraints',
    problemSolved:
      'Off-the-shelf SaaS products force organizations into rigid workflows that fail to capture proprietary business advantages or domain-specific nuances.',
    systemEngineered:
      'Bespoke modern full-stack web and internal applications engineered with intelligent cores, intuitive interfaces, and high-performance microservices.',
    architecturalFit:
      'Deploys as turnkey standalone products or deeply embedded sub-applications within existing enterprise software estates.',
    accent: '#A855F7',
    metrics: [
      { label: 'Front-End Stack', value: 'Next.js + TypeScript' },
      { label: 'Microservices', value: 'Containerized Python/Go' },
      { label: 'Security', value: 'SOC2 / Zero-Trust Ready' },
    ],
    deliverables: [
      'Bespoke Enterprise Web & Mobile Frontends',
      'Microservice Backends with Scalable Model Inference',
      'Multi-Tenant Data Isolation & RBAC Architecture',
      'Continuous Deployment Pipelines & Health Telemetry',
    ],
  },
  {
    id: 'integrations-infrastructure',
    tag: 'INFRASTRUCTURE',
    code: 'INF-06',
    title: 'Intelligent Integrations & Infrastructure',
    subtitle: 'Connecting models to enterprise systems securely and reliably',
    problemSolved:
      'AI pilots routinely stall at the integration phase due to fragile legacy APIs, regulatory data compliance, and lack of enterprise authentication standards.',
    systemEngineered:
      'Hardened middleware layers with bidirectional syncing, cryptographic audit logs, rate-limiting hedges, and air-gapped on-premise deployment options.',
    architecturalFit:
      'Bridges the gap between modern LLM providers, private cloud clusters, and mission-critical legacy backbones.',
    accent: '#EC4899',
    metrics: [
      { label: 'Deployment Modes', value: 'VPC / On-Prem / Cloud' },
      { label: 'Security Bounds', value: 'Zero Data Retention' },
      { label: 'Throughput', value: 'High-Concurrency Hedges' },
    ],
    deliverables: [
      'Enterprise SSO, SCIM & RBAC Governance Layers',
      'Bidirectional Sync Connectors for Salesforce, SAP, Jira & Slack',
      'Private Inference Gateway with PII Scrubbing',
      'Comprehensive Token Consumption Auditing & Cost Controls',
    ],
  },
];
