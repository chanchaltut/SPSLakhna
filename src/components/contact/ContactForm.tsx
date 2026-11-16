"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { site, whatsappLink } from '@/lib/site';
import styles from '@/components/admissions/ApplicationForm.module.css';

/** Contact message, sent to the school office as a pre-filled WhatsApp message. */
export default function ContactForm() {
  const [sentLink, setSentLink] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || '').trim();
    const text = [
      `*Message for ${site.name}*`,
      '',
      `Name: ${get('name')}`,
      get('phone') ? `Phone: ${get('phone')}` : null,
      '',
      get('message'),
    ].filter((l) => l !== null).join('\n');

    const link = whatsappLink(text);
    setSentLink(link);
    window.open(link, '_blank', 'noopener');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
      <div className="field">
        <label htmlFor="cf-name">Your name <span className="req">*</span></label>
        <input id="cf-name" name="name" required type="text" className="input" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="cf-phone">Mobile number <span className={styles.optional}>(optional)</span></label>
        <input id="cf-phone" name="phone" type="tel" inputMode="tel" className="input" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message <span className="req">*</span></label>
        <textarea id="cf-message" name="message" required className="input" rows={5} placeholder="How can we help?" />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        <WhatsAppIcon size={18} /> Send on WhatsApp
      </button>
      <p style={{ fontSize: 14, color: 'var(--ink-faint)' }}>
        Prefer email? Write to <a href={`mailto:${site.email}`} style={{ color: 'var(--purple-700)', fontWeight: 650 }}>{site.email}</a>
      </p>
      {sentLink && (
        <p className={styles.status} role="status" style={{ marginTop: 0 }}>
          <CheckCircle2 size={20} />
          <span>
            WhatsApp should have opened with your message — press <strong>Send</strong> there.
            If it did not open, <a href={sentLink} target="_blank" rel="noopener noreferrer">tap here</a>.
          </span>
        </p>
      )}
    </form>
  );
}
