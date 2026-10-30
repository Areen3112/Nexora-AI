'use client';

import React from 'react';
import { ENGINEERING_PRINCIPLES } from '@/data/principles';
import { Card } from '@/components/ui/Card';
import styles from './Principles.module.scss';

export const Principles: React.FC = () => {
  return (
    <section id="principles" className={styles.section} aria-label="Engineering Principles">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>ENGINEERING PRINCIPLES // TECHNICAL ETHOS</span>
          </div>
          <h2 className={styles.title}>
            The tenets that govern <em>every system we build</em>.
          </h2>
          <p className={styles.description}>
            AI engineering is plagued by demo-grade toys and inflated promises. We hold ourselves to uncompromising standards of empirical validation, operational reality, and system determinism.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className={styles.grid}>
          {ENGINEERING_PRINCIPLES.map((principle) => (
            <Card key={principle.number} className={styles.principleCard} brackets>
              <div className={styles.cardTop}>
                <span className={styles.principleNumber}>{principle.number}</span>
                <span className={styles.metricTag}>{principle.metric}</span>
              </div>

              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p className={styles.principleShort}>{principle.shortDesc}</p>
              <p className={styles.principleFull}>{principle.fullDesc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
