import React from 'react';
import { MapPin, Navigation, Layers } from 'lucide-react';
import styles from './GoogleMapEmbed.module.css';
import { site } from '@/lib/site';

interface GoogleMapEmbedProps {
  height?: string;
  showCard?: boolean;
}

export default function GoogleMapEmbed({ height = '450px', showCard = true }: GoogleMapEmbedProps) {
  const embedUrl = site.maps.embed;
  const directMapsLink = site.maps.link;

  return (
    <div className={styles.mapContainer} style={{ height }}>
      {showCard && (
        <div className={styles.overlayCard}>
          <div className={styles.cardHeader}>
            <div className={styles.pinIcon}>
              <MapPin size={20} />
            </div>
            <div>
              <h4 className={styles.schoolTitle}>{site.name}</h4>
              <p className={styles.addressText}>{site.address.line}</p>
            </div>
          </div>
          <div className={styles.cardActions}>
            <a 
              href={directMapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.directionsBtn}
            >
              <Navigation size={14} /> Get Directions
            </a>
            <span className={styles.satelliteHint}>
              <Layers size={14} /> Tap map layers for Satellite View
            </span>
          </div>
        </div>
      )}

      <iframe
        title="Swagat Public School, Lakhna — location map"
        src={embedUrl}
        className={styles.iframe}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
