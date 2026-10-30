'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  Zap,
  Shield,
  Workflow,
  Terminal,
  Activity,
  Layers,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import styles from './page.module.scss';

export default function LeadFlowProductPage() {
  const leadflowAppUrl = process.env.NEXT_PUBLIC_LEADFLOW_URL || 'http://localhost:3001';

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>BACK TO NEXORA AI HOMEPAGE</span>
          </Link>
          <div className={styles.statusGroup}>
            <Badge label="NEXORA PRODUCT SUITE" variant="crimson" pulse prefix="NX-PRD-01 //" />
            <Badge label="V1.0 PRODUCTION READY" variant="neutral" />
          </div>
        </div>

        {/* Product Hero */}
        <div className={styles.heroBlock}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              LeadFlow <span className={styles.versionTag}>by Nexora AI</span>
            </h1>
            <p className={styles.tagline}>
              High-velocity inbound qualification, agentic routing & real-time CRM orchestration.
            </p>
            <p className={styles.description}>
              Engineered by Nexora AI to eliminate conversion latency. LeadFlow ingests multi-channel inbound traffic, performs sub-second qualification against proprietary business criteria, and routes enriched opportunities to sales reps before the lead cools down.
            </p>

            <div className={styles.actionRow}>
              <Button href={leadflowAppUrl} isExternal variant="primary" size="lg" withArrow>
                Launch LeadFlow Application
              </Button>
              <Button href="/#inquiry" variant="secondary" size="lg">
                Request Enterprise Deployment
              </Button>
            </div>
          </div>

          <div className={styles.heroCockpit}>
            <div className={styles.cockpitCard}>
              <div className={styles.cockpitBar}>
                <Terminal size={14} className={styles.terminalIcon} />
                <span>LEADFLOW PIPELINE TELEMETRY</span>
              </div>
              <div className={styles.telemetryGrid}>
                <div className={styles.telemetryCell}>
                  <span className={styles.cellLabel}>INGESTION LATENCY</span>
                  <span className={styles.cellVal}>&lt; 140ms</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.cellLabel}>INTENT FIDELITY</span>
                  <span className={styles.cellVal}>98.4%</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.cellLabel}>ENRICHMENT RATE</span>
                  <span className={styles.cellVal}>100% AUTO</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.cellLabel}>SYNC PROTOCOLS</span>
                  <span className={styles.cellVal}>REST / GRAPHQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Architecture Pillars */}
        <div className={styles.pillarsSection}>
          <h2 className={styles.sectionHeading}>Engineering Architecture</h2>
          <div className={styles.pillarsGrid}>
            <Card className={styles.pillarCard} brackets>
              <div className={styles.pillarIconBox}>
                <Zap size={20} />
              </div>
              <h3>Sub-Second Qualification</h3>
              <p>
                Multi-threaded classifiers analyze inquiry semantics, budget signals, and technical scope in under 250 milliseconds.
              </p>
            </Card>

            <Card className={styles.pillarCard} brackets>
              <div className={styles.pillarIconBox}>
                <Workflow size={20} />
              </div>
              <h3>Agentic Routing Topologies</h3>
              <p>
                Autonomous routing agents evaluate sales rep capacity, territory alignment, and subject-matter fit to match prospects instantly.
              </p>
            </Card>

            <Card className={styles.pillarCard} brackets>
              <div className={styles.pillarIconBox}>
                <Database size={20} />
              </div>
              <h3>Bidirectional Sync Fabric</h3>
              <p>
                Two-way authenticated sync connectors for Salesforce, HubSpot, Linear, and internal PostgreSQL transactional stores.
              </p>
            </Card>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className={styles.specsSection}>
          <h2 className={styles.sectionHeading}>Technical Specifications</h2>
          <div className={styles.specsTable}>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Application Runtime</span>
              <span className={styles.specVal}>Next.js App Router, React 19, TypeScript</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>State Orchestration</span>
              <span className={styles.specVal}>Deterministic State Machines & Temporal.io Workflows</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Data Persistence</span>
              <span className={styles.specVal}>PostgreSQL with Row-Level Security & Redis Cache</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Security Standards</span>
              <span className={styles.specVal}>Zero Data Retention, AES-256 Encryption at Rest</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Deployment Options</span>
              <span className={styles.specVal}>Nexora Managed Cloud, Private VPC, or On-Premise Docker Swarm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
