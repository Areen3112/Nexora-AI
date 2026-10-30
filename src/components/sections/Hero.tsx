'use client';

import React from 'react';
import { ArrowRight, Terminal, Shield, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CrystallineCore } from '@/components/3d/CrystallineCore';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection} aria-label="Hero Introduction">
      {/* Background Architectural Grid Lines */}
      <div className={styles.gridOverlay} />
      <div className={styles.radialGlow} />

      <div className={styles.container}>
        <div className={styles.heroLayout}>
          {/* Left Column: Editorial Typography & Problem Framing */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrowContainer}>
              <Badge
                label="AI Systems Engineering"
                variant="crimson"
                pulse
                prefix="EST. 2024 //"
              />
              <span className={styles.systemTag}>ARCHITECTURE // DEPLOYED</span>
            </div>

            <h1 className={styles.headline}>
              We engineer <span className={styles.highlight}>intelligence</span> for complex worlds.
            </h1>

            <p className={styles.subheadline}>
              Nexora AI designs and builds production-grade artificial intelligence systems for demanding business, operational, and software environments. We transform probabilistic model capabilities into deterministic, auditable enterprise outcomes.
            </p>

            <div className={styles.actionGroup}>
              <Button href="#capabilities" variant="primary" size="lg" withArrow>
                Explore Capabilities
              </Button>
              <Button href="#inquiry" variant="secondary" size="lg">
                Discuss a Project
              </Button>
            </div>

            {/* Architectural Trust Indicators */}
            <div className={styles.trustStrip}>
              <div className={styles.trustItem}>
                <Zap size={14} className={styles.trustIcon} />
                <span>Deterministic Latency Budgets</span>
              </div>
              <div className={styles.trustItem}>
                <Shield size={14} className={styles.trustIcon} />
                <span>Zero Data Retention SLA</span>
              </div>
              <div className={styles.trustItem}>
                <Terminal size={14} className={styles.trustIcon} />
                <span>Agentic Multi-Step Topologies</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Crystalline Centerpiece */}
          <div className={styles.visualCol}>
            <div className={styles.centerpieceFrame}>
              <CrystallineCore accentColor="#E11D48" />
              <div className={styles.frameCornerTl} />
              <div className={styles.frameCornerTr} />
              <div className={styles.frameCornerBl} />
              <div className={styles.frameCornerBr} />
            </div>
          </div>
        </div>

        {/* Bottom Technical Status Ribbon */}
        <div className={styles.statusRibbon}>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>01</span>
            <span className={styles.ribbonText}>MULTI-AGENT ORCHESTRATION</span>
          </div>
          <div className={styles.ribbonDivider} />
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>02</span>
            <span className={styles.ribbonText}>HYBRID VECTOR + GRAPH RETRIEVAL</span>
          </div>
          <div className={styles.ribbonDivider} />
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>03</span>
            <span className={styles.ribbonText}>CUSTOM ENTERPRISE SOFTWARE</span>
          </div>
          <div className={styles.ribbonDivider} />
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>04</span>
            <span className={styles.ribbonText}>LEADFLOW PRODUCT SUITE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
