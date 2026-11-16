import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { site, whatsappLink, defaultWhatsappText } from '@/lib/site';
import styles from './CTABand.module.css';

interface CTABandProps {
  title?: React.ReactNode;
  text?: string;
}

/** Closing call-to-action panel used at the end of most pages. */
export default function CTABand({
  title = <>Give your child a <em>warm welcome</em> to school</>,
  text = `Admissions are open for ${site.grades} at ${site.fullName}. Apply online, or message the school office to plan a visit.`,
}: CTABandProps) {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.band}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.logo} alt="" width={420} height={420} className={styles.watermark} loading="lazy" />
        <div className={styles.content}>
          <span className="eyebrow eyebrow-light">Admissions open</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <Link href="/admissions" className="btn btn-gold">
              Apply for Admission <ArrowRight size={17} className="arrow" />
            </Link>
            <a href={whatsappLink(defaultWhatsappText)} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              <WhatsAppIcon size={18} /> WhatsApp {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
