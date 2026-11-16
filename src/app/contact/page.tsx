import React from 'react';
import { pageMetadata } from '@/lib/seo';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import GoogleMapEmbed from '@/components/ui/GoogleMapEmbed';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { site, whatsappLink, defaultWhatsappText } from '@/lib/site';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'Contact Us',
  `Contact Swagat Public School, Lakhna, Nuapada, Odisha ${site.address.postalCode}. Call or WhatsApp ${site.phone}, email ${site.email}. School hours and directions on Google Maps.`,
  '/contact',
);

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbJsonLd name="Contact" path="/contact" />
      <PageHeader
        crumb="Contact"
        eyebrow="Get in touch"
        title={<>We would love to <em>hear from you</em></>}
        lead={`Call, WhatsApp or visit ${site.fullName}. The school office is open ${site.hours.label.replace(':', ',')}.`}
      />

      <section className="section surface-paper">
        <div className="container">
          <address className={styles.infoGrid}>
            <a href={site.phoneHref} className={styles.infoCard}>
              <Phone size={22} strokeWidth={1.7} />
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>{site.phone}</span>
            </a>
            <a href={whatsappLink(defaultWhatsappText)} target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
              <WhatsAppIcon size={22} />
              <span className={styles.infoLabel}>WhatsApp</span>
              <span className={styles.infoValue}>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className={styles.infoCard}>
              <Mail size={22} strokeWidth={1.7} />
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{site.email}</span>
            </a>
            <div className={styles.infoCard}>
              <Clock size={22} strokeWidth={1.7} />
              <span className={styles.infoLabel}>School hours</span>
              <span className={styles.infoValue}>{site.hours.short}</span>
            </div>
          </address>

          <div className={`${styles.contactGrid} ${styles.mt}`}>
            <div className={`card ${styles.contactCard}`}>
              <span className="eyebrow">Message us</span>
              <h2>Send the school a message</h2>
              <p>Your message opens in WhatsApp, addressed to the school office.</p>
              <ContactForm />
            </div>

            <div className={styles.mapCol}>
              <GoogleMapEmbed height="100%" />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
                  <MapPin size={18} color="var(--purple-600)" /> {site.address.line}, {site.address.country}
                </p>
                <a href={site.maps.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <Navigation size={15} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
