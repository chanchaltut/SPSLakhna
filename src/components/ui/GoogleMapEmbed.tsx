import React from 'react';
import styles from './GoogleMapEmbed.module.css';
import { site } from '@/lib/site';

interface GoogleMapEmbedProps {
  height?: string;
}

export default function GoogleMapEmbed({ height = '450px' }: GoogleMapEmbedProps) {
  return (
    <div className={styles.mapContainer} style={{ height }}>
      <iframe
        title={`${site.fullName} — location map`}
        src={site.maps.embed}
        className={styles.iframe}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
