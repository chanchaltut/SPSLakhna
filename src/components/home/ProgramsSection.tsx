import React from 'react';
import styles from './ProgramsSection.module.css';
import { Baby, Blocks, BookOpen, Pencil, Microscope, GraduationCap } from 'lucide-react';

export default function ProgramsSection() {
  const programs = [
    {
      icon: Baby,
      title: "Nursery",
      age: "(3-4 years)",
      desc: "Gentle routines and play-based activities help early learners explore safely and build social skills."
    },
    {
      icon: Blocks,
      title: "LKG",
      age: "(4-5 years)",
      desc: "Introducing foundational concepts in phonics, numbers, and art through hands-on discovery."
    },
    {
      icon: BookOpen,
      title: "UKG",
      age: "(5-6 years)",
      desc: "Preparing for primary school with structured reading, writing, and logical thinking exercises."
    },
    {
      icon: Pencil,
      title: "Classes 1 & 2",
      age: "(6-8 years)",
      desc: "Building strong academic fundamentals while maintaining a joyful, exploratory approach to learning."
    },
    {
      icon: Microscope,
      title: "Classes 3 & 4",
      age: "(8-10 years)",
      desc: "Encouraging independent thought, teamwork, and deeper understanding of core subjects."
    },
    {
      icon: GraduationCap,
      title: "Class 5",
      age: "(10-11 years)",
      desc: "Fostering leadership, critical thinking, and advanced academic preparation for middle school."
    }
  ];

  return (
    <section className={`${styles.sectionWrapper} pattern-bg`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Our Programs</span>
        <h2 className={styles.title}>Tailored Learning for Every Age</h2>
        <p className={styles.description}>
          At Swagat Public School, every day is designed to inspire curiosity, creativity, and confidence. 
          Our programs are tailored for each age group, from Nursery to Class 5, ensuring that every child's unique needs and abilities are supported.
        </p>
      </div>
      
      <div className={styles.grid}>
        {programs.map((program, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>
              <program.icon size={28} strokeWidth={2} />
            </div>
            <h3 className={styles.cardTitle}>{program.title}</h3>
            <span className={styles.ageGroup}>{program.age}</span>
            <p className={styles.cardDesc}>{program.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
