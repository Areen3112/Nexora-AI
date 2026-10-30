import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  brackets?: boolean;
  glow?: boolean;
  hoverElevation?: boolean;
  accent?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  brackets = true,
  glow = false,
  hoverElevation = true,
  accent,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        brackets && styles.withBrackets,
        glow && styles.withGlow,
        hoverElevation && styles.hoverElevation,
        className
      )}
      style={{
        ...style,
        ...(accent ? ({ '--card-accent': accent } as React.CSSProperties) : {}),
      }}
      {...props}
    >
      {brackets && (
        <>
          <span className={styles.cornerTl} />
          <span className={styles.cornerTr} />
          <span className={styles.cornerBl} />
          <span className={styles.cornerBr} />
        </>
      )}
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
