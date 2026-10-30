'use client';

import React from 'react';
import Link from 'next/link';
import {
  Layers,
  Sparkles,
  ExternalLink,
  Shield,
  Workflow,
  Search,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { SYSTEMS_PRODUCTS, SystemProductItem } from '@/data/systems';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import styles from './SystemsProducts.module.scss';

export const SystemsProducts: React.FC = () => {
  const leadflowProduct = SYSTEMS_PRODUCTS.find((p) => p.id === 'leadflow') || SYSTEMS_PRODUCTS[0];
  const archetypes = SYSTEMS_PRODUCTS.filter((p) => p.id !== 'leadflow');

  return (
    <section id="systems" className={styles.section} aria-label="Systems and Products">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>SYSTEMS & PRODUCTS // PRODUCTION ARTIFACTS</span>
          </div>
          <h2 className={styles.title}>
            Architectures in motion. <em>Production software.</em>
          </h2>
          <p className={styles.description}>
            We engineer both proprietary product platforms and customized enterprise system archetypes. Below is our flagship lead conversion product alongside our modular production engines.
          </p>
        </div>

        {/* LeadFlow Flagship Showcase Banner */}
        <div className={styles.leadflowHeroBanner}>
          <div className={styles.leadflowGlow} />
          <div className={styles.leadflowLayout}>
            <div className={styles.leadflowMeta}>
              <div className={styles.leadflowBadges}>
                <Badge label="NEXORA FLAGSHIP PRODUCT" variant="crimson" pulse />
                <Badge label="ACTIVE V1.0 DEPLOYMENT" variant="neutral" />
              </div>

              <h3 className={styles.leadflowTitle}>{leadflowProduct.name}</h3>
              <p className={styles.leadflowTagline}>{leadflowProduct.tagline}</p>
              <p className={styles.leadflowDesc}>{leadflowProduct.description}</p>

              <div className={styles.leadflowActions}>
                <Button
                  href={leadflowProduct.link || '/leadflow'}
                  variant="primary"
                  size="md"
                  withArrow
                >
                  Launch LeadFlow Application
                </Button>
                <Button href="#inquiry" variant="secondary" size="md">
                  Deploy Custom Instance
                </Button>
              </div>

              <div className={styles.leadflowTechStack}>
                <span className={styles.stackLabel}>ENGINEERED WITH:</span>
                <div className={styles.stackTags}>
                  {leadflowProduct.techStack.map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LeadFlow Architecture Feature Cockpit */}
            <div className={styles.leadflowCockpitCol}>
              <div className={styles.cockpitTerminal}>
                <div className={styles.terminalBar}>
                  <div className={styles.terminalDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className={styles.terminalTitle}>LEADFLOW // ENGINE STATUS: ACTIVE</span>
                </div>

                <div className={styles.terminalContent}>
                  <div className={styles.terminalLine}>
                    <span className={styles.prompt}>nx-leadflow$</span>
                    <span className={styles.cmd}>status --orchestration-tree</span>
                  </div>
                  <div className={styles.terminalOutput}>
                    [OK] Inbound Ingestion Gateway: 4 Webhooks Active<br />
                    [OK] Intent Classifier: Sub-200ms latency budgeted<br />
                    [OK] Qualification Agents: 4 Specialized Workers<br />
                    [OK] CRM Gateway: Bidirectional Sync Verified
                  </div>

                  <div className={styles.terminalFeatures}>
                    <span className={styles.featureLabel}>PRODUCTION HIGHLIGHTS</span>
                    <ul className={styles.featureList}>
                      {leadflowProduct.architectureHighlights.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className={styles.featIcon} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Archetypes Grid */}
        <div className={styles.archetypesHeader}>
          <h3 className={styles.archetypeSectionTitle}>Enterprise System Archetypes</h3>
          <p className={styles.archetypeSectionSubtitle}>
            Modular architectures pre-engineered for rapid adaptation to private client infrastructures.
          </p>
        </div>

        <div className={styles.archetypesGrid}>
          {archetypes.map((arch) => (
            <Card key={arch.id} className={styles.archetypeCard} brackets accent={arch.accent}>
              <div className={styles.archHeader}>
                <div className={styles.archMeta}>
                  <span className={styles.archStatus}>{arch.status}</span>
                  <h4 className={styles.archName}>{arch.name}</h4>
                </div>
                <div
                  className={styles.archIconBox}
                  style={{ color: arch.accent }}
                >
                  <Workflow size={20} />
                </div>
              </div>

              <p className={styles.archTagline}>{arch.tagline}</p>
              <p className={styles.archDesc}>{arch.description}</p>

              <div className={styles.archFeatures}>
                <span className={styles.archFeatTitle}>ARCHITECTURAL HIGHLIGHTS</span>
                <ul className={styles.archList}>
                  {arch.architectureHighlights.map((hl, i) => (
                    <li key={i}>
                      <span className={styles.bullet} style={{ color: arch.accent }}>▸</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.archFoot}>
                <div className={styles.archStack}>
                  {arch.techStack.map((tech, j) => (
                    <span key={j} className={styles.archTechPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
