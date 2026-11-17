import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LogoMark } from '@/components/ui/Logo';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { site, whatsappLink, defaultWhatsappText } from '@/lib/site';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About the School', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'School News', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQs', href: '/#faq' },
];

const socials = [
  { label: 'Facebook', href: site.socials.facebook, icon: Facebook },
  { label: 'Instagram', href: site.socials.instagram, icon: Instagram },
  { label: 'YouTube', href: site.socials.youtube, icon: Youtube },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <LogoMark size={84} className={styles.seal} />
            <p className={styles.brandName}>{site.name}</p>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.text}>
              An English-medium, CBSE-pattern school in {site.address.area}, {site.address.locality}, {site.address.district} district,
              {site.address.region}. Teaching {site.grades} since {site.founded}; permitted up to Class 8.
            </p>
            <div className={styles.socials}>
              <a
                href={whatsappLink(defaultWhatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={17} />
              </a>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={s.label}>
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.column} aria-label="Footer">
            <h2 className={styles.heading}>Explore</h2>
            <ul className={styles.navLinks}>
              {links.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <address className={styles.column}>
            <h2 className={styles.heading}>Contact</h2>
            <ul className={styles.contactList}>
              <li>
                <Phone size={16} />
                <span>
                  <a href={site.phoneHref}>{site.phone}</a>
                  <small>Call or WhatsApp</small>
                </span>
              </li>
              <li>
                <Phone size={16} />
                <span>
                  <a href={site.phone2Href}>{site.phone2}</a>
                  <small>Call</small>
                </span>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <MapPin size={16} />
                <a href={site.maps.link} target="_blank" rel="noopener noreferrer">
                  {site.address.area}, {site.address.locality}, Block {site.address.block},<br />
                  Dist. {site.address.district}, {site.address.region} {site.address.postalCode}
                </a>
              </li>
            </ul>
          </address>

          <div className={styles.column}>
            <h2 className={styles.heading}>School Hours</h2>
            <ul className={styles.contactList}>
              <li>
                <Clock size={16} />
                <span>
                  Monday – Saturday
                  <small>8:00 AM – 2:00 PM</small>
                </span>
              </li>
              <li className={styles.muted}>
                <Clock size={16} />
                <span>Sunday<small>Closed</small></span>
              </li>
            </ul>
            <Link href="/admissions" className={`btn btn-gold btn-sm ${styles.footerCta}`}>
              Apply for Admission
            </Link>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p>{site.address.locality} &middot; {site.address.district} &middot; {site.address.region}</p>
          <p>
            Designed and developed by{' '}
            <a href="https://www.codehyphen.in" target="_blank" rel="noopener" className={styles.credit}>
              Code Hyphen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
