import React from 'react';
import styles from './TeachersSection.module.css';

const teachers = [
  { name: "Mrs. Anita Sharma",  role: "Lead Primary Teacher",        bio: "With over 10 years of experience in primary education, Anita creates interactive math and science lessons that children love.", initials: "AS" },
  { name: "Mr. Rajesh Kumar",   role: "Senior Educator (Class 4–5)", bio: "Rajesh fosters critical thinking with a warm approach — ensuring every child feels valued and supported every single day.", initials: "RK" },
  { name: "Ms. Priya Patel",    role: "Pre-Primary Specialist",      bio: "Priya brings warmth and creativity to our youngest learners, building a safe and inspiring space for Nursery and KG students.", initials: "PP" },
];

export default function TeachersSection() {
  return (
    <>
      <section className={`${styles.sectionWrapper} pattern-bg`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Team</span>
          <h2 className={styles.title}>Experienced educators dedicated to nurturing every child.</h2>
          <p className={styles.description}>
            Our team consists of passionate, certified educators who bring warmth, creativity, and expertise to every day. 
            Each teacher understands the unique strengths of every child, ensuring personalized attention and support.
          </p>
        </div>

        <div className={styles.grid}>
          {teachers.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imagePlaceholder}><span className={styles.avatar} aria-hidden="true">{t.initials}</span></div>
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{t.name}</h3>
                <span className={styles.role}>{t.role}</span>
                <p className={styles.bio}>{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAL wave at bottom — bg=white, svg fill=teal */}
      <div style={{ backgroundColor: '#FFFFFF', lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path fill="#1D4B5E" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </>
  );
}
