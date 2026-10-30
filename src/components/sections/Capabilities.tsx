'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Cpu,
  Workflow,
  Search,
  LineChart,
  Layers,
  ShieldCheck,
  CheckCircle,
  Activity,
  ArrowRight,
  Eye,
} from 'lucide-react';
import { CAPABILITIES, CapabilityItem } from '@/data/capabilities';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BlueprintViewer } from '@/components/ui/BlueprintViewer';
import styles from './Capabilities.module.scss';

export const Capabilities: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(CAPABILITIES[0].id);
  const [showBlueprint, setShowBlueprint] = useState<boolean>(false);

  const activeCapability = CAPABILITIES.find((c) => c.id === selectedId) || CAPABILITIES[0];

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'systems-engineering':
        return Cpu;
      case 'agentic-workflows':
        return Workflow;
      case 'knowledge-rag':
        return Search;
      case 'data-intelligence':
        return LineChart;
      case 'custom-software':
        return Layers;
      case 'integrations-infrastructure':
        return ShieldCheck;
      default:
        return Cpu;
    }
  };

  return (
    <section id="capabilities" className={styles.section} aria-label="Engineering Capabilities">
      {/* Background Accent Glow that changes dynamically with selected capability accent */}
      <div
        className={styles.ambientGlow}
        style={{
          background: `radial-gradient(circle, ${activeCapability.accent}18 0%, transparent 70%)`,
        }}
      />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>ENGINEERING CAPABILITIES // CORE DISCIPLINES</span>
          </div>
          <h2 className={styles.title}>
            Architected for reliability. <em>Engineered for scale.</em>
          </h2>
          <p className={styles.description}>
            We do not sell generic wrappers or off-the-shelf bots. Every Nexora capability represents an integrated discipline of software engineering, distributed systems, and mathematical intelligence.
          </p>
        </div>

        {/* Interactive Capability Selector Tabs */}
        <div className={styles.tabGrid} role="tablist" aria-label="Capability Categories">
          {CAPABILITIES.map((cap) => {
            const IconComp = getCapabilityIcon(cap.id);
            const isSelected = cap.id === selectedId;

            return (
              <button
                key={cap.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`capability-panel-${cap.id}`}
                id={`capability-tab-${cap.id}`}
                className={clsx(styles.tabButton, isSelected && styles.activeTab)}
                onClick={() => setSelectedId(cap.id)}
                style={{
                  '--accent': cap.accent,
                } as React.CSSProperties}
              >
                <div className={styles.tabIcon}>
                  <IconComp size={18} />
                </div>
                <div className={styles.tabMeta}>
                  <span className={styles.tabCode}>{cap.code}</span>
                  <span className={styles.tabTitle}>{cap.title}</span>
                </div>
                <div className={styles.tabIndicator} />
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep-Dive Cockpit */}
        <div
          id={`capability-panel-${activeCapability.id}`}
          role="tabpanel"
          aria-labelledby={`capability-tab-${activeCapability.id}`}
          className={styles.cockpitPanel}
          style={{ '--accent': activeCapability.accent } as React.CSSProperties}
        >
          <div className={styles.cockpitHeader}>
            <div className={styles.cockpitMeta}>
              <Badge label={activeCapability.tag} variant="crimson" pulse prefix={activeCapability.code} />
              <h3 className={styles.cockpitTitle}>{activeCapability.title}</h3>
              <p className={styles.cockpitSubtitle}>{activeCapability.subtitle}</p>
            </div>

            {/* Performance Gauges */}
            <div className={styles.metricsStrip}>
              {activeCapability.metrics.map((m, idx) => (
                <div key={idx} className={styles.metricGauge}>
                  <span className={styles.metricLabel}>{m.label}</span>
                  <span className={styles.metricVal}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cockpitBody}>
            {/* Left: The Engineering Breakdown */}
            <div className={styles.breakdownCol}>
              <div className={styles.detailCard}>
                <div className={styles.detailHeader}>
                  <span className={styles.detailTag}>01 // THE PROBLEM SOLVED</span>
                </div>
                <p className={styles.detailText}>{activeCapability.problemSolved}</p>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailHeader}>
                  <span className={styles.detailTag}>02 // THE SYSTEM WE ENGINEER</span>
                </div>
                <p className={styles.detailText}>{activeCapability.systemEngineered}</p>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailHeader}>
                  <span className={styles.detailTag}>03 // ARCHITECTURAL FIT</span>
                </div>
                <p className={styles.detailText}>{activeCapability.architecturalFit}</p>
              </div>
            </div>

            {/* Right: Deliverables & Architectural Schematic Button */}
            <div className={styles.deliverablesCol}>
              <Card className={styles.deliverablesCard} brackets accent={activeCapability.accent}>
                <div className={styles.deliverablesHeader}>
                  <Activity size={18} className={styles.deliverableIcon} />
                  <h4>Core Engineering Deliverables</h4>
                </div>

                <ul className={styles.deliverablesList}>
                  {activeCapability.deliverables.map((item, idx) => (
                    <li key={idx} className={styles.deliverableItem}>
                      <CheckCircle size={15} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.actionFoot}>
                  <button
                    onClick={() => setShowBlueprint(true)}
                    className={styles.blueprintLaunchBtn}
                    aria-label="Inspect Architectural Vector Blueprint"
                  >
                    <Eye size={15} />
                    <span>INSPECT SCHEMATIC BLUEPRINT</span>
                  </button>
                  <Button href="#inquiry" variant="outline" size="sm" withArrow>
                    Consult on this Capability
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Anime.js Interactive Blueprint Schematic Viewer Modal */}
        {showBlueprint && (
          <BlueprintViewer
            systemCode={activeCapability.code}
            systemName={activeCapability.title}
            onClose={() => setShowBlueprint(false)}
          />
        )}
      </div>
    </section>
  );
};
