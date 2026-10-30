import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.scss';

export interface BadgeProps {
  label: string;
  variant?: 'crimson' | 'cyan' | 'emerald' | 'amber' | 'neutral';
  pulse?: boolean;
  prefix?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'neutral',
  pulse = false,
  prefix,
  className,
}) => {
  return (
    <span className={clsx(styles.badge, styles[variant], className)}>
      {pulse && <span className={styles.pulseDot} />}
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <span className={styles.label}>{label}</span>
    </span>
  );
};
