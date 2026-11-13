import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';
import { Sparkles, Info } from 'lucide-react';

export default function AboutSection() {
  return (
    <>
      <section className={`${styles.aboutWrapper} pattern-bg`}>
        <div className={styles.aboutContent}>
          <span className={styles.eyebrow}>About Swagat Public School</span>
          <h2 className={styles.title}>
            A nurturing space where learning begins with care.
          </h2>

          <div className={styles.grid}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/gallery/reading.jpg"
                alt="Children learning in a classroom at Swagat Public School, Lakhna"
                width={580}
                height={440}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                At our school, we believe <span className={styles.bold}>early childhood is a time of wonder, discovery, and rapid growth.</span> Our mission is to create a safe and inspiring environment where children feel confident to explore, ask questions, and express themselves freely.
              </p>
              <p className={styles.paragraph}>
                We combine <span className={styles.bold}>structured learning with play-based activities</span> to support each child's intellectual, social, and emotional development. With small class sizes and dedicated educators, we ensure every child receives the attention and encouragement they deserve.
              </p>
              <p className={styles.paragraph}>
                Here, learning is joyful, friendships are meaningful, and <span className={styles.bold}>every day brings new opportunities to grow.</span>
              </p>

              <div className={styles.buttonGroup}>
                <button className={styles.primaryButton}>
                  Book a Visit <Sparkles size={16} />
                </button>
                <button className={styles.secondaryButton}>
                  Parent Information <Info size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURPLE wave at bottom — bg=white, svg fill=purple */}
      <div className={styles.waveBottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path fill="#7B3FA0" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,56C840,48,960,32,1080,26.7C1200,21,1320,27,1380,29.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" />
        </svg>
      </div>
    </>
  );
}
