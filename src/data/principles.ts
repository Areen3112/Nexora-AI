export interface PrincipleItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  metric: string;
}

export const ENGINEERING_PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'Deconstruct Before Selection',
    shortDesc: 'Understand the problem and constraints before picking a model.',
    fullDesc:
      'We never start with "which LLM should we use?" We start by auditing input distribution, latency tolerance, accuracy requirements, and regulatory boundaries. If a simple deterministic algorithm or SQL query solves the bottleneck, we build that.',
    metric: 'Zero-Hype Architecture',
  },
  {
    number: '02',
    title: 'Grounded Data & Hard Constraints',
    shortDesc: 'Intelligence cannot exceed the fidelity of its foundation.',
    fullDesc:
      'No prompt trickery compensates for corrupted data pipelines. We engineer strict schema validation, provenance tracking, and data cleaning layers before any model consumes an enterprise token.',
    metric: '100% Provenance Auditability',
  },
  {
    number: '03',
    title: 'High-Value Application Only',
    shortDesc: 'Deploy AI only where it creates compounding leverage.',
    fullDesc:
      'We refuse to build superficial chatbots or toy demos. We focus exclusively on mission-critical workflows where automation and intelligent synthesis unlock hundreds of hours or prevent costly errors.',
    metric: 'Compounding Operational ROI',
  },
  {
    number: '04',
    title: 'Frictionless Workflow Integration',
    shortDesc: 'Embed systems into where teams already work.',
    fullDesc:
      'A brilliant model that lives on an isolated webpage will be ignored. We embed intelligence directly into your team’s existing ERPs, CRMs, terminals, and operational communication channels.',
    metric: 'Zero Context Switching',
  },
  {
    number: '05',
    title: 'Zero-Trust Security & Privacy',
    shortDesc: 'Architected for enterprise confidentiality and uptime.',
    fullDesc:
      'Every system is designed with zero-data-retention agreements, tenant-isolated vector namespaces, encrypted secrets, and comprehensive SOC2/HIPAA compliance boundaries.',
    metric: 'Zero Data Leakage Bounds',
  },
  {
    number: '06',
    title: 'Empirical Continuous Evaluation',
    shortDesc: 'Evaluate systems deterministically—AI is not magic.',
    fullDesc:
      'We treat prompts, weights, and agent policies as version-controlled code. Every release is gated by automated synthetic benchmarks, regression test suites, and live drift detectors.',
    metric: 'Continuous Test Coverage',
  },
];
