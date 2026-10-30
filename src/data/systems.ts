export interface SystemProductItem {
  id: string;
  name: string;
  category: 'PRODUCT' | 'SYSTEM ARCHETYPE';
  status: 'ACTIVE PRODUCT' | 'PRODUCTION TEMPLATE';
  tagline: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  link?: string;
  isExternalLink?: boolean;
  accent: string;
}

export const SYSTEMS_PRODUCTS: SystemProductItem[] = [
  {
    id: 'leadflow',
    name: 'LeadFlow',
    category: 'PRODUCT',
    status: 'ACTIVE PRODUCT',
    tagline: 'High-velocity inbound qualification, agentic routing & CRM synchronization',
    description:
      'A dedicated Nexora AI product engineered to eliminate lead decay. LeadFlow ingests multi-channel inbound inquiries, performs autonomous real-time qualification against dynamic criteria, and orchestrates immediate CRM handoffs.',
    architectureHighlights: [
      'Multi-Channel Ingestion (Webhooks, Forms, Live Chat, Email)',
      'Sub-Second Intent Classification & Scoring Engine',
      'Autonomous Multi-Agent Enrichment & Deduplication',
      'Bidirectional CRM Sync with Instant Calendar Routing',
    ],
    techStack: ['Next.js', 'TypeScript', 'LangChain', 'PostgreSQL', 'Tailwind/Sass', 'FastAPI'],
    link: '/leadflow',
    isExternalLink: false,
    accent: '#E11D48',
  },
  {
    id: 'document-cognition',
    name: 'CogniVault Engine',
    category: 'SYSTEM ARCHETYPE',
    status: 'PRODUCTION TEMPLATE',
    tagline: 'High-density unstructured document parsing & graph-augmented retrieval',
    description:
      'An enterprise knowledge extraction core designed for massive PDF archives, contracts, financial disclosures, and technical manuals. Combines multimodal vision segmentation with cross-encoder verification.',
    architectureHighlights: [
      'Visual Layout Decomposition (Tables, Diagrams, Hand-written Notes)',
      'Hybrid Dense/Sparse Vector Search with ColBERT Reranking',
      'Grounding Anchor Verification with Bounding-Box Highlighting',
      'Tenant-Isolated Encryption with Zero Training Guarantees',
    ],
    techStack: ['Python', 'Qdrant', 'PyMuPDF', 'FastAPI', 'Three.js Visualizer'],
    accent: '#0EA5E9',
  },
  {
    id: 'agentic-orchestrator',
    name: 'NexusFlow Orchestrator',
    category: 'SYSTEM ARCHETYPE',
    status: 'PRODUCTION TEMPLATE',
    tagline: 'Stateful multi-agent execution framework with fault-tolerant rollbacks',
    description:
      'Coordinates heterogeneous agent swarms across distributed enterprise tools. Enforces strict state checkpoints, circuit breakers, and human-in-the-loop intervention gates to ensure deterministic operational outcomes.',
    architectureHighlights: [
      'Event-Driven Distributed Actor Model',
      'Granular Execution Step Checkpointing & Undo Logic',
      'Human Supervisor Cockpit with Differential Diff Previews',
      'OpenTelemetry Distributed Tracing & Cost Auditing',
    ],
    techStack: ['TypeScript', 'Temporal.io', 'Redis', 'Node.js', 'Next.js'],
    accent: '#10B981',
  },
  {
    id: 'decision-intelligence-hub',
    name: 'Axiom Intelligence Hub',
    category: 'SYSTEM ARCHETYPE',
    status: 'PRODUCTION TEMPLATE',
    tagline: 'Real-time telemetry synthesis & executive scenario forecasting',
    description:
      'Continuous streaming analytics that synthesizes millions of telemetry events, enterprise ERP data, and market indicators into structured decision trees with Bayesian confidence intervals.',
    architectureHighlights: [
      'Real-Time Apache Kafka / RabbitMQ Stream Ingestion',
      'Bayesian Sensitivity Bounds & Monte Carlo Simulation Engine',
      'Conversational Natural Language Interface over SQL/Snowflake',
      'Automated Weekly Executive Briefing Generation',
    ],
    techStack: ['ClickHouse', 'Python', 'Apache Kafka', 'React 19', 'Next.js'],
    accent: '#F59E0B',
  },
];
