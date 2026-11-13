import React from 'react';
import styles from './FeaturesSection.module.css';
import { Users, Puzzle, ShieldCheck, Apple, Palette, Handshake } from 'lucide-react';

const features = [
  { icon: Users, title: "Small Class Sizes",      desc: "Individual attention in a supportive setting. With just a few children per class, our teachers can focus on each little learner, helping them build confidence." },
  { icon: Puzzle, title: "Play-Based Curriculum",  desc: "Learning through fun games, stories, and hands-on activities. Children explore new ideas through play, imagination, and curiosity." },
  { icon: ShieldCheck, title: "Cozy & Safe Rooms",      desc: "Bright, cheerful spaces made for happy little explorers. Our classrooms are designed with comfort and safety, full of soft corners and colorful decor." },
  { icon: Apple, title: "Healthy Snacks",          desc: "Nutritious snacks to keep young learners full and energised. We provide balanced snacks that fuel growing bodies and curious minds." },
  { icon: Palette, title: "Creative Activities",     desc: "Art, music, and movement to spark imagination. Painting, dancing, and singing help develop fine motor skills and confidence in every child." },
  { icon: Handshake, title: "Friendship & Kindness",  desc: "We help children learn to share, care, and play together. We teach empathy through group activities and guided play every single day." },
];

export default function FeaturesSection() {
  return (
    <>
      {/* DARK TEAL-BLUE — flows from Teachers' teal wave, NO top wave */}
      <section className={`${styles.sectionWrapper} pattern-bg-dark`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Features</span>
          <h2 className={styles.title}>Everything your child needs to grow, explore, and play.</h2>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}><f.icon size={26} strokeWidth={2} /></span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CREAM wave at bottom — bg=teal, svg fill=cream */}
      <div style={{ backgroundColor: '#1D4B5E', lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path fill="#F5F1EA" fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,37.3C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </>
  );
}
