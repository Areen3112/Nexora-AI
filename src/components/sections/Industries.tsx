'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  HeartPulse,
  TrendingUp,
  Megaphone,
  Building2,
  Factory,
  Briefcase,
  ShieldAlert,
  ArrowRight,
  GitBranch,
} from 'lucide-react';
import { INDUSTRIES, IndustryItem } from '@/data/industries';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import styles from './Industries.module.scss';

export const Industries: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);

  const activeIndustry =
    INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES[0];

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'healthcare':
        return HeartPulse;
      case 'finance':
        return TrendingUp;
      case 'marketing':
        return Megaphone;
      case 'real-estate':
        return Building2;
      case 'manufacturing':
        return Factory;
      case 'enterprise':
        return Briefcase;
      default:
        return Briefcase;
    }
  };

  const ActiveIcon = getIndustryIcon(activeIndustry.id);

  return (
    <section id="industries" className={styles.section} aria-label="Industries and Applications">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>CROSS-INDUSTRY MATRIX // DOMAIN APPLICATIONS</span>
          </div>
          <h2 className={styles.title}>
            Different industries. Different constraints. <em>Engineered systems.</em>
          </h2>
          <p className={styles.description}>
            We reject the premise of one-size-fits-all AI wrappers. Each vertical operates under distinct regulatory bounds, data textures, and latency tolerances. Here is how our architecture adapts.
          </p>
        </div>

        {/* Industry Pill Switcher */}
        <div className={styles.industryNav} role="tablist" aria-label="Industries">
          {INDUSTRIES.map((ind) => {
            const Icon = getIndustryIcon(ind.id);
            const isSelected = ind.id === selectedIndustryId;

            return (
              <button
                key={ind.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`industry-panel-${ind.id}`}
                id={`industry-tab-${ind.id}`}
                className={clsx(styles.industryBtn, isSelected && styles.active)}
                onClick={() => setSelectedIndustryId(ind.id)}
                style={{ '--ind-accent': ind.accent } as React.CSSProperties}
              >
                <Icon size={16} className={styles.btnIcon} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Architecture Stage */}
        <div
          id={`industry-panel-${activeIndustry.id}`}
          role="tabpanel"
          aria-labelledby={`industry-tab-${activeIndustry.id}`}
          className={styles.industryStage}
          style={{ '--ind-accent': activeIndustry.accent } as React.CSSProperties}
        >
          {/* Top Banner: Challenge & Solution */}
          <div className={styles.stageHeader}>
            <div className={styles.headerTitleGroup}>
              <div className={styles.iconFrame}>
                <ActiveIcon size={24} />
              </div>
              <div>
                <span className={styles.indCode}>{activeIndustry.code} // APPLICATION DIRECTIVE</span>
                <h3 className={styles.indTitle}>{activeIndustry.name}</h3>
                <p className={styles.indTagline}>{activeIndustry.tagline}</p>
              </div>
            </div>

            <div className={styles.capabilitiesTags}>
              <span className={styles.capLabel}>ENGAGED CAPABILITIES:</span>
              <div className={styles.capsList}>
                {activeIndustry.keyCapabilities.map((cap, i) => (
                  <Badge key={i} label={cap} variant="neutral" />
                ))}
              </div>
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className={styles.stageChallengeGrid}>
            <div className={styles.challengeBox}>
              <span className={styles.boxTag}>REPRESENTATIVE SECTOR CHALLENGE</span>
              <p>{activeIndustry.challenge}</p>
            </div>
            <div className={styles.solutionBox}>
              <span className={styles.boxTagSolution}>THE ENGINEERED INTELLIGENT SYSTEM</span>
              <p>{activeIndustry.solution}</p>
            </div>
          </div>

          {/* Step-by-Step Practical Workflow Walkthrough */}
          <div className={styles.workflowContainer}>
            <div className={styles.workflowHeading}>
              <GitBranch size={16} className={styles.workflowIcon} />
              <h4>PRACTICAL DATAFLOW ARCHITECTURE</h4>
            </div>

            <div className={styles.stepGrid}>
              {activeIndustry.workflowSteps.map((step) => (
                <div key={step.step} className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepIndex}>STAGE {step.step}</span>
                  </div>
                  <h5 className={styles.stepTitle}>{step.title}</h5>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Governance & Realism Footer */}
          <div className={styles.governanceNotice}>
            <ShieldAlert size={16} className={styles.alertIcon} />
            <p>
              <strong>Compliance Boundary:</strong> {activeIndustry.governanceNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
