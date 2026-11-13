import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    /* DARK TEAL — flows directly from CTA's teal wave, no top wave */
    <footer className={`${styles.footerContent} pattern-bg-dark`}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <div style={{ marginBottom: '18px' }}>
            <Logo variant="light" size="sm" />
          </div>
          <p className={styles.text}>
            A welcoming school in {site.address.locality}, {site.address.district}, where learning begins with care and every child builds a strong foundation for the future.
          </p>
          <p className={styles.tagline}>{site.tagline}</p>
          <div className={styles.socials}>
            <a href={site.socials.facebook} className={styles.socialIcon} aria-label="Facebook"><Facebook size={18} /></a>
            <a href={site.socials.instagram} className={styles.socialIcon} aria-label="Instagram"><Instagram size={18} /></a>
            <a href={site.socials.youtube} className={styles.socialIcon} aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>

        <address className={styles.column} style={{ fontStyle: 'normal' }}>
          <h3>Contact Us</h3>
          <div className={styles.contactItem}>
            <Phone size={16} /> <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <div className={styles.contactItem}>
            <Mail size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className={styles.contactItem} style={{ alignItems: 'flex-start' }}>
            <MapPin size={16} style={{ marginTop: '3px', flexShrink: 0 }} />
            <span>{site.address.locality}, Dist. {site.address.district}<br />{site.address.region} {site.address.postalCode}, {site.address.country}</span>
          </div>
        </address>

        <div className={styles.column}>
          <h3>School Hours</h3>
          <div className={styles.contactItem}>
            <Clock size={16} /> <span>{site.hours.label}</span>
          </div>
          <div className={styles.contactItem} style={{ opacity: 0.55 }}>
            <Clock size={16} /> <span>{site.hours.closedLabel}</span>
          </div>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/programs" className={styles.navLink}>Programs</Link>
            <Link href="/admissions" className={styles.navLink}>Admissions</Link>
            <Link href="/gallery" className={styles.navLink}>Gallery</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="#" className={styles.link}>Privacy Policy</Link>
          <Link href="#" className={styles.link}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
