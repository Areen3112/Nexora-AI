'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Compass,
  FileCode2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  FileSpreadsheet,
} from 'lucide-react';
import { METHODOLOGY_STAGES, MethodologyStage } from '@/data/methodology';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './Methodology.module.scss';

export const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>(METHODOLOGY_STAGES[0].step);

  const currentStage =
    METHODOLOGY_STAGES.find((s) => s.step === activeStep) || METHODOLOGY_STAGES[0];

  const getStageIcon = (step: string) => {
    switch (step) {
      case '01':
        return Compass;
      case '02':
        return FileCode2;
      case '03':
        return Cpu;
      case '04':
        return Layers;
      case '05':
        return Sparkles;
      default:
        return Compass;
    }
  };

  const StageIcon = getStageIcon(currentStage.step);

  return (
    <section id="methodology" className={styles.section} aria-label="Engineering Methodology">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>THE 5-STAGE METHODOLOGY // FROM CONSTRAINT TO PRODUCTION</span>
          </div>
          <h2 className={styles.title}>
            How we engineer <em>deterministic systems</em>.
          </h2>
          <p className={styles.description}>
            AI engineering is software engineering governed by probability and constraints. We replace trial-and-error prompting with a disciplined, auditable five-stage delivery pipeline.
          </p>
        </div>

        {/* Horizontal Milestone Pipeline */}
        <div className={styles.pipelineBar}>
          {METHODOLOGY_STAGES.map((stage) => {
            const Icon = getStageIcon(stage.step);
            const isActive = stage.step === activeStep;

            return (
              <button
                key={stage.step}
                className={clsx(styles.milestoneBtn, isActive && styles.active)}
                onClick={() => setActiveStep(stage.step)}
                style={{ '--stage-accent': stage.accent } as React.CSSProperties}
              >
                <div className={styles.milestoneNumber}>{stage.step}</div>
                <div className={styles.milestoneMeta}>
                  <span className={styles.milestoneName}>{stage.name}</span>
                  <span className={styles.milestonePhase}>{stage.phase}</span>
                </div>
                <div className={styles.milestoneConnector} />
              </button>
            );
          })}
        </div>

        {/* Active Stage Inspection Theater */}
        <div
          className={styles.stageCockpit}
          style={{ '--stage-accent': currentStage.accent } as React.CSSProperties}
        >
          <div className={styles.cockpitHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.iconBox}>
                <StageIcon size={26} />
              </div>
              <div>
                <span className={styles.phaseLabel}>
                  STAGE {currentStage.step} // {currentStage.phase}
                </span>
                <h3 className={styles.stageTitle}>{currentStage.name}</h3>
                <p className={styles.stageSummary}>{currentStage.summary}</p>
              </div>
            </div>
          </div>

          <div className={styles.cockpitBody}>
            {/* Left: Detailed Narrative */}
            <div className={styles.narrativeCol}>
              <div className={styles.narrativeCard}>
                <h4 className={styles.subhead}>Architectural Rationale</h4>
                <p className={styles.narrativeText}>{currentStage.detail}</p>
              </div>

              {/* Key Activities */}
              <div className={styles.activitiesCard}>
                <h4 className={styles.subhead}>Disciplined Key Activities</h4>
                <ul className={styles.activityList}>
                  {currentStage.keyActivities.map((act, i) => (
                    <li key={i} className={styles.activityItem}>
                      <span className={styles.bullet}>▸</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Concrete Artifacts Produced */}
            <div className={styles.artifactsCol}>
              <Card className={styles.artifactCard} brackets accent={currentStage.accent}>
                <div className={styles.artifactHeader}>
                  <FileSpreadsheet size={18} className={styles.artifactIcon} />
                  <h4>Production Artifacts Delivered</h4>
                </div>

                <ul className={styles.artifactList}>
                  {currentStage.artifactsProduced.map((art, idx) => (
                    <li key={idx} className={styles.artifactItem}>
                      <CheckCircle size={15} className={styles.checkIcon} />
                      <span className={styles.artifactName}>{art}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.verificationBadge}>
                  <Badge
                    label="AUDITABLE STAGE GATE"
                    variant="neutral"
                    prefix="ISO / SOC2 //"
                  />
                  <p className={styles.gateNotice}>
                    Phase completion requires technical committee sign-off and deterministic evaluation passing before stage advancement.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
