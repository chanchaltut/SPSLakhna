"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={`${styles.heroWrapper} pattern-bg`}>
      
      {/* ─── Left: Text ─── */}
      <div className={styles.heroLeft}>
        <div className={styles.heroTextContent}>
          <h1 className={styles.title}>
            An Exceptional Start for Every Little Learner
          </h1>
          <p className={styles.description}>
            A welcoming early learning environment in the heart of Lakhna, Nuapada, 
            where every child receives personal attention and purposeful education.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/programs">
              <button className={styles.primaryButton}>
                Explore Our Programs <ArrowRight size={16} style={{ marginLeft: 4 }} />
              </button>
            </Link>
          </div>

          <div className={styles.enrollmentBadge}>
            <div className={styles.enrollmentDot}>
              <ArrowUpRight size={14} />
            </div>
            <span>Limited Enrollment – Applications Open</span>
          </div>
        </div>
      </div>

      {/* ─── Right: Image + Vertical Wave ─── */}
      <div className={styles.heroRight}>
        {/* Dynamic Wave SVG based on screen size */}
        <div className={styles.verticalWave}>
          {isMobile ? (
            // Horizontal wave for mobile (curves downward)
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path fill="var(--color-bg-cream)" d="M0,0 L1440,0 L1440,30 C1200,90 900,120 720,50 C540,-20 240,10 0,60 Z" />
            </svg>
          ) : (
            // Vertical wave for desktop (curves right into image)
            <svg viewBox="0 0 150 1000" preserveAspectRatio="none">
              <path fill="var(--color-bg-cream)" d="M0,0 L0,1000 L60,1000 C150,750 -40,450 60,200 C85,120 110,60 90,0 Z" />
            </svg>
          )}
        </div>
        
        <Image
          src="/images/Hero_Section.png"
          alt="Children learning with their teacher at Swagat Public School, Lakhna"
          fill
          className={styles.heroImage}
          priority
        />
      </div>

      <div className={styles.straightDivider} />
    </section>
  );
}
