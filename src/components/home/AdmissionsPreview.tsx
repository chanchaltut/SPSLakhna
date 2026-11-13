import React from 'react';
import Link from 'next/link';
import styles from './AdmissionsPreview.module.css';
import { ArrowRight } from 'lucide-react';

const steps = [
  { num: "1", title: "Submit Your Application",   desc: "Complete the online form with your child's basic information to begin the process." },
  { num: "2", title: "Schedule a Visit",           desc: "Meet our educators, explore the classrooms, and ask any questions you may have." },
  { num: "3", title: "Confirmation & Welcome",     desc: "Once enrollment is confirmed, we will provide all necessary details to prepare for a smooth start." },
];

export default function AdmissionsPreview() {
  return (
    <>
      {/* CREAM bg — straight from Programs (same bg, no wave) */}
      <section className={`${styles.sectionWrapper} pattern-bg`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Admissions</span>
          <h2 className={styles.title}>A Simple and Supportive Enrollment Process</h2>
          <p className={styles.description}>
            We are delighted that you are considering Swagat Public School for your child. 
            Our admissions process is designed to be clear, transparent, and welcoming.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.actionWrapper}>
          <Link href="/admissions">
            <button className={styles.primaryButton}>
              Start Your Application <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* PURPLE wave at bottom — bg=cream, svg fill=purple */}
      <div style={{ backgroundColor: '#F5F1EA', lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path fill="#7B3FA0" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,56C840,48,960,32,1080,26.7C1200,21,1320,27,1380,29.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </>
  );
}
