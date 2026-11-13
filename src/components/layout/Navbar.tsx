"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Home, BookOpen, GraduationCap, ClipboardList, Images, Newspaper } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home',       href: '/',           icon: Home },
  { label: 'About',      href: '/about',       icon: BookOpen },
  { label: 'Programs',   href: '/programs',    icon: GraduationCap },
  { label: 'Admissions', href: '/admissions',  icon: ClipboardList },
  { label: 'Gallery',    href: '/gallery',     icon: Images },
  { label: 'Blog',       href: '/blog',        icon: Newspaper },
];

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setIsScrolled(currentY > 20);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);
  const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);

  return (
    <>
      <nav
        className={[
          styles.navbar,
          isScrolled ? styles.navbarScrolled : '',
          isHidden ? styles.navbarHidden : '',
        ].join(' ')}
      >
        <Link href="/" className={styles.logoLink} aria-label="Swagat Public School, Lakhna — Home">
          <Logo />
        </Link>

        {/* PILL Design Container */}
        <div className={styles.desktopNav}>
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact">
            <button className={styles.ctaButton}>
              Contact Now <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          aria-expanded={isSidebarOpen}
        >
          <span className={`${styles.bar} ${isSidebarOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${isSidebarOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${isSidebarOpen ? styles.bar3Open : ''}`} />
        </button>
      </nav>

      <div
        className={`${styles.backdrop} ${isSidebarOpen ? styles.backdropOpen : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}
        aria-label="Navigation menu"
      >
        <div className={styles.sidebarHeader}>
          <Logo variant="light" size="sm" />
          <button className={styles.sidebarCloseBtn} onClick={closeSidebar} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {navItems.map((item, idx) => (
            <React.Fragment key={item.href}>
              {idx === 4 && <div className={styles.sidebarDivider} />}
              <Link href={item.href} className={styles.sidebarLink}>
                <span className={styles.sidebarIcon}><item.icon size={20} strokeWidth={2} /></span>
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/contact">
            <button className={styles.sidebarCta}>Contact Us</button>
          </Link>
        </div>
      </aside>
    </>
  );
}
