import React from 'react';
import Link from 'next/link';
import styles from './CTAStrip.module.css';
import { BookOpen, ClipboardList, Mail, ArrowRight } from 'lucide-react';

const ctas = [
  { icon: BookOpen, title: "From Our Blog",    desc: "Discover activities, parenting tips, and insights from our educators.", btn: "Read More", href: "/blog" },
  { icon: ClipboardList, title: "Apply Today",      desc: "Learn about enrollment, available spots, and how to join our community.", btn: "Apply Now", href: "/admissions" },
  { icon: Mail, title: "Get in Touch",     desc: "Have questions or want to schedule a visit? Our friendly team is here.", btn: "Contact Us", href: "/contact" },
];

export default function CTAStrip() {
  return (
    <>
      {/* PURPLE — flows from Admissions' purple wave, NO top wave needed */}
      <section className={`${styles.sectionWrapper} pattern-bg-dark`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Ready to Learn More?</span>
          <h2 className={styles.title}>Start Your Journey With Us</h2>
          <p className={styles.description}>
            Explore what makes our school special. Choose the path that feels right for your family. 
            Take the next step toward a joyful beginning.
          </p>
        </div>

        <div className={styles.grid}>
          {ctas.map((cta, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}><cta.icon size={26} strokeWidth={2} /></span>
              <h3 className={styles.cardTitle}>{cta.title}</h3>
              <p className={styles.cardDesc}>{cta.desc}</p>
              <Link href={cta.href}>
                <button className={styles.cardButton}>{cta.btn} <ArrowRight size={16} /></button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* DARK TEAL wave into Footer — bg=purple, svg fill=teal */}
      <div style={{ backgroundColor: '#7B3FA0', lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path fill="#1D4B5E" fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,37.3C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </>
  );
}
