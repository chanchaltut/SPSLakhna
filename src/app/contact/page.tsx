import React from 'react';
import { pageMetadata } from '@/lib/seo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import GoogleMapEmbed from '@/components/ui/GoogleMapEmbed';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { site } from '@/lib/site';
import styles from './contact.module.css';

export const metadata = pageMetadata(
  'Contact Us',
  `Contact Swagat Public School, Lakhna, Nuapada, Odisha ${site.address.postalCode}. Phone, email, school hours and directions on Google Maps.`,
  '/contact',
);

export default function ContactPage() {
  return (
    <main className={`${styles.mainWrapper} pattern-bg`}>
      <BreadcrumbJsonLd name="Contact" path="/contact" />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>
          Get in Touch with Us
        </h1>

        <address className={styles.infoGrid}>
          <a href={site.phoneHref} className={styles.infoCard}>
            <span className={styles.infoIcon}><Phone size={22} /></span>
            <span>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>{site.phone}</span>
            </span>
          </a>
          <a href={`mailto:${site.email}`} className={styles.infoCard}>
            <span className={styles.infoIcon}><Mail size={22} /></span>
            <span>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{site.email}</span>
            </span>
          </a>
          <a href={site.maps.link} target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
            <span className={styles.infoIcon}><MapPin size={22} /></span>
            <span>
              <span className={styles.infoLabel}>Address</span>
              <span className={styles.infoValue}>{site.address.line}</span>
            </span>
          </a>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}><Clock size={22} /></span>
            <span>
              <span className={styles.infoLabel}>School Hours</span>
              <span className={styles.infoValue}>{site.hours.label}</span>
            </span>
          </div>
        </address>

        <div className={styles.contactGrid}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <form className={styles.form}>
              <input type="text" placeholder="Full Name" aria-label="Full Name" className={styles.input} />
              <input type="email" placeholder="Email Address" aria-label="Email Address" className={styles.input} />
              <textarea placeholder="Your Message" aria-label="Your Message" className={styles.textarea}></textarea>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>

          <div className={styles.mapCard}>
            <GoogleMapEmbed height="100%" showCard={true} />
          </div>
        </div>
      </div>
    </main>
  );
}
