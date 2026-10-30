'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Database,
  Repeat,
  Network,
  Share2,
  FileText,
  Cpu,
  TrendingDown,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import styles from './ProblemChorus.module.scss';

interface ProblemItem {
  id: string;
  code: string;
  icon: any;
  title: string;
  statusQuo: string;
  engineeredState: string;
  impactArea: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    id: 'fragmented-data',
    code: 'ERR-01',
    icon: Database,
    title: 'Fragmented Business Data',
    statusQuo: 'Critical intelligence isolated across disconnected silos, inconsistent schemas, and unindexed data lakes.',
    engineeredState: 'Unified semantic fabric with automated entity resolution and continuous streaming ingestion.',
    impactArea: 'Enterprise Data Architecture',
  },
  {
    id: 'manual-processes',
    code: 'ERR-02',
    icon: Repeat,
    title: 'Manual Operational Bottlenecks',
    statusQuo: 'High-value domain experts spend 40% of their time on repetitive intake, reconciliation, and transcription.',
    engineeredState: 'Autonomous agentic pipelines with bounded human approval checkpoints for anomalous exceptions.',
    impactArea: 'Operational Efficiency',
  },
  {
    id: 'complex-workflows',
    code: 'ERR-03',
    icon: Network,
    title: 'Fragile Multi-Step Workflows',
    statusQuo: 'Single-prompt AI experiments fail silently on non-linear multi-step tasks without state recovery.',
    engineeredState: 'State-machine orchestration with checkpoint rollbacks, retry hedging, and deterministic state trees.',
    impactArea: 'Systems Reliability',
  },
  {
    id: 'trapped-knowledge',
    code: 'ERR-04',
    icon: FileText,
    title: 'Knowledge Trapped in Documents',
    statusQuo: 'Crucial institutional intelligence buried inside dense PDFs, contracts, and scanned memos.',
    engineeredState: 'Hybrid graph + vector retrieval with cell-level table parsing and exact coordinate citations.',
    impactArea: 'Knowledge Retrieval',
  },
  {
    id: 'engineering-bottlenecks',
    code: 'ERR-05',
    icon: Cpu,
    title: 'Stochastic Model Non-Determinism',
    statusQuo: 'Inconsistent model outputs, latency spikes (>10s), and lack of regression test harnesses.',
    engineeredState: 'Strict schema enforcement, multi-model failover routers, and automated synthetic evaluation suites.',
    impactArea: 'Production Engineering',
  },
  {
    id: 'disconnected-systems',
    code: 'ERR-06',
    icon: Share2,
    title: 'Disconnected SaaS Tooling',
    statusQuo: 'Data trapped in walled gardens (Salesforce, SAP, Jira) requiring manual human bridges.',
    engineeredState: 'Bi-directional authenticated middleware with real-time webhooks and cryptographic audit logs.',
    impactArea: 'Software Infrastructure',
  },
  {
    id: 'decision-making',
    code: 'ERR-07',
    icon: TrendingDown,
    title: 'Constrained Decision Velocity',
    statusQuo: 'Leaders navigate market shifts relying on delayed quarterly spreadsheets and intuition.',
    engineeredState: 'Continuous telemetry synthesis with sensitivity bounds and probabilistic scenario modeling.',
    impactArea: 'Executive Decision Support',
  },
  {
    id: 'scaling-limits',
    code: 'ERR-08',
    icon: Layers,
    title: 'Linear Scaling Headwinds',
    statusQuo: 'Every 20% increase in business volume demands a 20% increase in manual operational headcounts.',
    engineeredState: 'Sub-linear software leverage where intelligent systems scale capacity without headcount inflation.',
    impactArea: 'Organizational Scalability',
  },
];

export const ProblemChorus: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'both' | 'engineered' | 'statusQuo'>('both');
  const [activeProblem, setActiveProblem] = useState<string>(PROBLEMS[0].id);

  const currentItem = PROBLEMS.find((p) => p.id === activeProblem) || PROBLEMS[0];
  const IconComponent = currentItem.icon;

  return (
    <section id="problems" className={styles.section} aria-label="Problems We Solve">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>THE PROBLEMS WE SOLVE // COMPLEXITY TO COHERENCE</span>
          </div>
          <h2 className={styles.title}>
            Turning fragmented complexity into <em>orchestrated intelligence</em>.
          </h2>
          <p className={styles.description}>
            Modern organizations do not suffer from a shortage of models; they suffer from systemic friction, trapped data, and fragile integrations. We engineer the architectural bridge between complex reality and reliable execution.
          </p>

          {/* Interactive Mode Filter */}
          <div className={styles.viewControls}>
            <button
              className={clsx(styles.viewBtn, selectedView === 'both' && styles.active)}
              onClick={() => setSelectedView('both')}
            >
              Comparative Analysis
            </button>
            <button
              className={clsx(styles.viewBtn, selectedView === 'statusQuo' && styles.active)}
              onClick={() => setSelectedView('statusQuo')}
            >
              Fragile Status Quo
            </button>
            <button
              className={clsx(styles.viewBtn, selectedView === 'engineered' && styles.active)}
              onClick={() => setSelectedView('engineered')}
            >
              Nexora Engineered State
            </button>
          </div>
        </div>

        {/* 8 Problems Interactive Matrix */}
        <div className={styles.problemGrid}>
          {PROBLEMS.map((problem) => {
            const ItemIcon = problem.icon;
            const isSelected = activeProblem === problem.id;

            return (
              <div
                key={problem.id}
                className={clsx(styles.problemCardWrapper, isSelected && styles.selected)}
                onClick={() => setActiveProblem(problem.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveProblem(problem.id);
                  }
                }}
              >
                <Card className={styles.problemCard} brackets={isSelected}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIconBox}>
                      <ItemIcon size={18} />
                    </div>
                    <span className={styles.cardCode}>{problem.code}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{problem.title}</h3>
                  <span className={styles.impactBadge}>{problem.impactArea}</span>

                  <div className={styles.cardBody}>
                    {(selectedView === 'both' || selectedView === 'statusQuo') && (
                      <div className={styles.statusQuoBox}>
                        <div className={styles.stateTag}>
                          <AlertTriangle size={12} className={styles.warnIcon} />
                          <span>THE FRICTION</span>
                        </div>
                        <p>{problem.statusQuo}</p>
                      </div>
                    )}

                    {(selectedView === 'both' || selectedView === 'engineered') && (
                      <div className={styles.engineeredBox}>
                        <div className={styles.stateTag}>
                          <CheckCircle2 size={12} className={styles.checkIcon} />
                          <span>ENGINEERED RESOLUTION</span>
                        </div>
                        <p>{problem.engineeredState}</p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Focal Banner (Cartier-Inspired Monolithic Synthesis) */}
        <div className={styles.focalBanner}>
          <div className={styles.focalInner}>
            <div className={styles.focalHeader}>
              <div className={styles.focalIconBox}>
                <IconComponent size={24} />
              </div>
              <div>
                <span className={styles.focalCode}>{currentItem.code} // DEEP ARCHITECTURE</span>
                <h4 className={styles.focalTitle}>{currentItem.title}</h4>
              </div>
            </div>

            <div className={styles.focalComparison}>
              <div className={styles.focalSide}>
                <span className={styles.sideLabel}>STOCHASTIC / UNSTRUCTURED REALITY</span>
                <p className={styles.sideText}>{currentItem.statusQuo}</p>
              </div>
              <div className={styles.focalArrow}>
                <ArrowRight size={20} />
              </div>
              <div className={styles.focalSideEngineered}>
                <span className={styles.sideLabelEngineered}>DETERMINISTIC NEXORA ARCHITECTURE</span>
                <p className={styles.sideText}>{currentItem.engineeredState}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
