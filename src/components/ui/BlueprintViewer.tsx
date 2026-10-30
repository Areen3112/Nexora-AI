'use client';

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { Terminal, Shield, RefreshCw, X, Play } from 'lucide-react';
import styles from './BlueprintViewer.module.scss';

interface BlueprintViewerProps {
  systemCode?: string;
  systemName?: string;
  onClose?: () => void;
}

export const BlueprintViewer: React.FC<BlueprintViewerProps> = ({
  systemCode = 'SYS-01',
  systemName = 'AI Systems Engineering',
  onClose,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [telemetryCount, setTelemetryCount] = useState<number>(0);
  const [isTracing, setIsTracing] = useState<boolean>(true);

  const runAnimation = () => {
    setIsTracing(true);
    if (!svgRef.current) return;

    // 1. Anime.js SVG Path Line Tracing
    anime({
      targets: svgRef.current.querySelectorAll('path.schematic-line'),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutCubic',
      duration: 2200,
      delay: function (el, i) {
        return i * 250;
      },
      complete: () => {
        setIsTracing(false);
      },
    });

    // 2. Anime.js Node Pulse
    anime({
      targets: svgRef.current.querySelectorAll('circle.schematic-node'),
      scale: [0, 1],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .6)',
      duration: 1200,
      delay: anime.stagger(180, { start: 400 }),
    });

    // 3. Anime.js Numeric Telemetry Counter
    const counterObj = { val: 0 };
    anime({
      targets: counterObj,
      val: 99.98,
      round: 100,
      easing: 'easeOutExpo',
      duration: 2000,
      update: () => {
        setTelemetryCount(counterObj.val);
      },
    });
  };

  useEffect(() => {
    runAnimation();
  }, [systemCode]);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="System Architecture Schematic">
      <div className={styles.modal}>
        {/* Top Header */}
        <div className={styles.header}>
          <div className={styles.titleInfo}>
            <Terminal size={16} className={styles.icon} />
            <span className={styles.code}>{systemCode} // SCHEMATIC BLUEPRINT</span>
            <h3 className={styles.title}>{systemName}</h3>
          </div>

          <div className={styles.headerActions}>
            <button
              onClick={runAnimation}
              className={styles.actionBtn}
              aria-label="Re-trace schematic signals"
              title="Re-run Anime.js trace"
            >
              <RefreshCw size={14} className={isTracing ? styles.spinning : ''} />
              <span>TRACE DATAFLOW</span>
            </button>
            {onClose && (
              <button onClick={onClose} className={styles.closeBtn} aria-label="Close schematic">
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* SVG Schematic Canvas */}
        <div className={styles.canvasContainer}>
          <svg
            ref={svgRef}
            viewBox="0 0 900 450"
            className={styles.schematicSvg}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Backdrop Lines */}
            <g opacity="0.08" stroke="#FFFFFF" strokeWidth="1">
              <line x1="50" y1="50" x2="850" y2="50" strokeDasharray="4 4" />
              <line x1="50" y1="150" x2="850" y2="150" strokeDasharray="4 4" />
              <line x1="50" y1="250" x2="850" y2="250" strokeDasharray="4 4" />
              <line x1="50" y1="350" x2="850" y2="350" strokeDasharray="4 4" />
              <line x1="150" y1="30" x2="150" y2="400" strokeDasharray="4 4" />
              <line x1="450" y1="30" x2="450" y2="400" strokeDasharray="4 4" />
              <line x1="750" y1="30" x2="750" y2="400" strokeDasharray="4 4" />
            </g>

            {/* Connecting Circuit Paths traced by Anime.js */}
            <path
              className="schematic-line"
              d="M 120 225 L 260 225"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
            />
            <path
              className="schematic-line"
              d="M 260 225 L 340 140 L 460 140"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
            />
            <path
              className="schematic-line"
              d="M 260 225 L 340 310 L 460 310"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
            />
            <path
              className="schematic-line"
              d="M 460 140 L 580 225"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
            />
            <path
              className="schematic-line"
              d="M 460 310 L 580 225"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
            />
            <path
              className="schematic-line"
              d="M 580 225 L 760 225"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
            />

            {/* Secondary Feedback / Rollback Loop */}
            <path
              className="schematic-line"
              d="M 580 225 C 540 390, 300 390, 260 225"
              fill="none"
              stroke="#E11D48"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.6"
            />

            {/* Architecture Node 1: Ingestion Gateway */}
            <g transform="translate(120, 225)">
              <circle className="schematic-node" r="28" fill="#14141E" stroke="#E11D48" strokeWidth="2" filter="url(#glow)" />
              <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-mono)">GATEWAY</text>
              <text y="44" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="var(--font-mono)">INGESTION</text>
            </g>

            {/* Node 2: Validation Router */}
            <g transform="translate(260, 225)">
              <circle className="schematic-node" r="24" fill="#14141E" stroke="#0EA5E9" strokeWidth="2" />
              <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="var(--font-mono)">SCHEMA</text>
              <text y="38" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="var(--font-mono)">VALIDATOR</text>
            </g>

            {/* Node 3A: Agent Swarm Worker A */}
            <g transform="translate(460, 140)">
              <rect x="-40" y="-20" width="80" height="40" rx="4" fill="#14141E" stroke="#38BDF8" strokeWidth="1.5" />
              <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="var(--font-mono)">SYNTHESIZER</text>
              <text y="34" textAnchor="middle" fill="#646470" fontSize="8" fontFamily="var(--font-mono)">AGENT_A</text>
            </g>

            {/* Node 3B: Vector Knowledge Index */}
            <g transform="translate(460, 310)">
              <rect x="-40" y="-20" width="80" height="40" rx="4" fill="#14141E" stroke="#10B981" strokeWidth="1.5" />
              <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="var(--font-mono)">RETRIEVAL</text>
              <text y="34" textAnchor="middle" fill="#646470" fontSize="8" fontFamily="var(--font-mono)">RAG_GRAPH</text>
            </g>

            {/* Node 4: Consensus & Sanitizer */}
            <g transform="translate(580, 225)">
              <polygon points="0,-24 24,0 0,24 -24,0" fill="#14141E" stroke="#F59E0B" strokeWidth="2" />
              <text y="3" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="var(--font-mono)">GATE</text>
              <text y="38" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="var(--font-mono)">OVERSIGHT</text>
            </g>

            {/* Node 5: Enterprise Sink / Production Commit */}
            <g transform="translate(760, 225)">
              <circle className="schematic-node" r="30" fill="#14141E" stroke="#10B981" strokeWidth="2.5" filter="url(#glow)" />
              <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-mono)">PRODUCTION</text>
              <text y="46" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="var(--font-mono)">VERIFIED</text>
            </g>
          </svg>
        </div>

        {/* Telemetry Status Footer */}
        <div className={styles.telemetryFooter}>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>DETERMINISTIC FIDELITY</span>
            <span className={styles.statVal}>{telemetryCount.toFixed(2)}%</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>FAILOVER CIRCUIT</span>
            <span className={styles.statVal}>ACTIVE // HEDGED</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>LATENCY P95</span>
            <span className={styles.statVal}>&lt; 180ms</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>VERIFICATION</span>
            <span className={styles.statVal}>ANIME.JS VECT-TRACE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
