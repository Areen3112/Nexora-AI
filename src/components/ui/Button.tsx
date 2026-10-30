'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  withArrow = false,
  children,
  className,
  ...props
}) => {
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {withArrow && <ArrowUpRight className={styles.arrow} size={16} />}
      <span className={styles.glimmer} />
    </>
  );

  const classes = clsx(
    styles.button,
    styles[variant],
    styles[size],
    withArrow && styles.hasArrow,
    className
  );

  if (href) {
    if (isExternal || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
