import React from 'react';
import GoogleMapEmbed from '@/components/ui/GoogleMapEmbed';
import styles from './MapSection.module.css';

export default function MapSection() {
  return (
    <section className={`${styles.sectionWrapper} pattern-bg-dark`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Find Us Easily</span>
          <h2 className={styles.title}>Visit Swagat Public School</h2>
          <p className={styles.description}>
            Located in Lakhna, Nuapada district, Odisha. Use the interactive map below to explore our location, 
            switch to Satellite View, or get instant turn-by-turn navigation.
          </p>
        </div>

        <div className={styles.mapWrapper}>
          <GoogleMapEmbed height="480px" />
        </div>
      </div>
    </section>
  );
}
