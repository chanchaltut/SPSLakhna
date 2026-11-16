"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { site, whatsappLink, defaultWhatsappText } from '@/lib/site';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Utility bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <p className={styles.topbarNote}>
            <span className={styles.pulse} aria-hidden="true" />
            Admissions open &middot; {site.grades}
          </p>
          <div className={styles.topbarLinks}>
            <a href={site.phoneHref}><Phone size={14} /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className={styles.topbarEmail}><Mail size={14} /> {site.email}</a>
          </div>
        </div>
      </div>

      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.logoLink} aria-label={`${site.fullName} — Home`}>
            <Logo />
          </Link>

          <nav className={styles.desktopNav} aria-label="Main">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Link href="/admissions" className={`btn btn-primary btn-sm ${styles.cta}`}>
              Apply Now <ArrowRight size={16} className="arrow" />
            </Link>
            <button
              className={styles.menuButton}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <Logo variant="light" size="sm" />
          <button className={styles.closeButton} onClick={close} aria-label="Close menu" tabIndex={isOpen ? 0 : -1}>
            <X size={20} />
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Mobile">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                tabIndex={isOpen ? 0 : -1}
              >
                <span className={styles.drawerIndex}>{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.drawerFooter}>
          <Link href="/admissions" className="btn btn-gold btn-block" tabIndex={isOpen ? 0 : -1}>
            Apply for Admission <ArrowRight size={16} className="arrow" />
          </Link>
          <div className={styles.drawerContacts}>
            <a href={site.phoneHref} tabIndex={isOpen ? 0 : -1}><Phone size={15} /> {site.phone}</a>
            <a href={whatsappLink(defaultWhatsappText)} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1}>
              <WhatsAppIcon size={15} /> WhatsApp
            </a>
            <span><MapPin size={15} /> {site.address.locality}, {site.address.district}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
