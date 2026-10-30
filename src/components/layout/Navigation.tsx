'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import styles from './Navigation.module.scss';
import { Button } from '@/components/ui/Button';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['capabilities', 'industries', 'methodology', 'systems', 'principles', 'inquiry'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Systems & Products', href: '#systems', id: 'systems' },
    { label: 'Principles', href: '#principles', id: 'principles' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
        <div className={styles.container}>
          {/* Brand Logo */}
          <Link href="/" className={styles.brand} onClick={handleLinkClick}>
            <div className={styles.brandIcon}>
              <Cpu size={18} className={styles.brandSvg} />
              <span className={styles.brandGlow} />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>NEXORA</span>
              <span className={styles.brandSuffix}>AI</span>
            </div>
          </Link>

          {/* Operational Status Pill */}
          <div className={styles.statusPill}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>SYS: ACTIVE // PROD</span>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={clsx(styles.navLink, activeSection === link.id && styles.active)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action & Mobile Toggle */}
          <div className={styles.actions}>
            <Button
              href="#inquiry"
              variant="primary"
              size="sm"
              withArrow
              className={styles.ctaButton}
            >
              Discuss a Project
            </Button>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={clsx(styles.mobileDrawer, mobileMenuOpen && styles.open)}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileDrawerInner}>
          <div className={styles.mobileTelemetry}>
            <Terminal size={14} />
            <span>NEXORA AI // RUNTIME: PROD-ACTIVE</span>
          </div>

          <nav className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={clsx(styles.mobileLink, activeSection === link.id && styles.active)}
                onClick={handleLinkClick}
              >
                <span className={styles.linkNumber}>0{navLinks.indexOf(link) + 1}</span>
                <span className={styles.linkText}>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className={styles.mobileDrawerFooter}>
            <Button
              href="#inquiry"
              variant="primary"
              size="md"
              withArrow
              className={styles.mobileCta}
              onClick={handleLinkClick}
            >
              Discuss a Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
