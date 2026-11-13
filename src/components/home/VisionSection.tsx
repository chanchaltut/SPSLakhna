import React from 'react';
import styles from './VisionSection.module.css';
import { Lightbulb, HeartHandshake, Shapes, Sprout } from 'lucide-react';

const cards = [
  { icon: Lightbulb, title: "Our Vision",   desc: "To create a joyful space where children feel safe, confident, and excited to learn every day." },
  { icon: HeartHandshake, title: "Our Values",   desc: "Kindness, curiosity, and respect guide how we learn, play, and grow together." },
  { icon: Shapes, title: "Our Approach", desc: "We believe children learn best through play, creativity, and hands-on discovery." },
  { icon: Sprout, title: "Our Promise",  desc: "To nurture happy, independent little learners ready for their next big step." },
];

export default function VisionSection() {
  return (
    <>
      {/* PURPLE bg — flows directly from About's purple wave, NO top wave */}
      <section className={`${styles.sectionWrapper} pattern-bg-dark`}>
        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.card}>
              <span className={styles.icon}><card.icon size={26} strokeWidth={2} /></span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHITE wave at bottom — bg=purple, svg fill=white */}
      <div style={{ backgroundColor: '#7B3FA0', lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path fill="#FFFFFF" fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,58.7C840,64,960,64,1080,58.7C1200,53,1320,43,1380,37.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </>
  );
}
