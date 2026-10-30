'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Terminal, Shield, ArrowUp } from 'lucide-react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Telemetry Bar */}
      <div className={styles.telemetryBar}>
        <div className={styles.container}>
          <div className={styles.telemetryItem}>
            <Terminal size={14} className={styles.telemetryIcon} />
            <span className={styles.telemetryLabel}>RUNTIME NODE:</span>
            <span className={styles.telemetryValue}>NX-CORE-01 (VPC-EAST)</span>
          </div>
          <div className={styles.telemetryItem}>
            <span className={styles.statusDot} />
            <span className={styles.telemetryLabel}>ORCHESTRATOR STATUS:</span>
            <span className={styles.telemetryValue}>OPERATIONAL // 99.98% SLA</span>
          </div>
          <div className={styles.telemetryItem}>
            <Shield size={14} className={styles.telemetryIcon} />
            <span className={styles.telemetryLabel}>SECURITY POSTURE:</span>
            <span className={styles.telemetryValue}>ZERO DATA RETENTION</span>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className={styles.mainGrid}>
        <div className={styles.container}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <div className={styles.brandIcon}>
                <Cpu size={20} />
              </div>
              <div className={styles.brandText}>
                <span className={styles.brandName}>NEXORA</span>
                <span className={styles.brandSuffix}>AI</span>
              </div>
            </div>
            <p className={styles.brandMission}>
              Nexora AI engineers intelligent systems for complex business, operational, and software challenges.
              We turn stochastic models into deterministic enterprise infrastructure.
            </p>
            <div className={styles.brandMeta}>
              <span>LAT: 40.7128° N // LON: 74.0060° W</span>
              <span>ENGINEERING LABS & SYSTEMS ARCHITECTURE</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Capabilities</h4>
            <ul className={styles.linkList}>
              <li><a href="#capabilities">AI Systems Engineering</a></li>
              <li><a href="#capabilities">Agentic AI & Workflows</a></li>
              <li><a href="#capabilities">Knowledge Systems & RAG</a></li>
              <li><a href="#capabilities">Data Intelligence</a></li>
              <li><a href="#capabilities">Custom AI Software</a></li>
              <li><a href="#capabilities">Intelligent Infrastructure</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Industries</h4>
            <ul className={styles.linkList}>
              <li><a href="#industries">Healthcare & Clinical Ops</a></li>
              <li><a href="#industries">Finance & Quantitative Ops</a></li>
              <li><a href="#industries">Marketing & Content Ops</a></li>
              <li><a href="#industries">Real Estate Intelligence</a></li>
              <li><a href="#industries">Manufacturing & Logistics</a></li>
              <li><a href="#industries">Enterprise Services</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Systems & Products</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/leadflow" className={styles.productLink}>
                  <span>LeadFlow</span>
                  <span className={styles.productBadge}>PRODUCT</span>
                </Link>
              </li>
              <li><a href="#systems">CogniVault Engine</a></li>
              <li><a href="#systems">NexusFlow Orchestrator</a></li>
              <li><a href="#systems">Axiom Intelligence Hub</a></li>
              <li><a href="#methodology">5-Stage Methodology</a></li>
              <li><a href="#principles">Engineering Principles</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclosures & Regulatory Bounds */}
      <div className={styles.disclosures}>
        <div className={styles.container}>
          <p className={styles.disclaimerText}>
            <strong>Architectural Governance Notice:</strong> Nexora AI provides customized artificial intelligence engineering and software systems architecture. Systems in healthcare and finance operate strictly in decision-support and workflow-acceleration capacities; our software does not provide autonomous clinical medical diagnosis or regulated investment advice. All client data is processed under zero-data-retention isolation protocols.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Nexora AI Inc. All rights reserved. Precision AI Engineering.
          </p>

          <button
            onClick={scrollToTop}
            className={styles.scrollTopButton}
            aria-label="Scroll to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
