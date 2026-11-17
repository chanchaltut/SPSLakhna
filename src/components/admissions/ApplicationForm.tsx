"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { site, whatsappLink } from '@/lib/site';
import styles from './ApplicationForm.module.css';

const classes = [
  'Nursery (3–4 years)', 'LKG (4–5 years)', 'UKG (5–6 years)', 
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
];

/**
 * Admission application. On submit the details are composed into a WhatsApp
 * message addressed to the school office, which the parent then sends.
 */
export default function ApplicationForm() {
  const [sentLink, setSentLink] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || '').trim();

    const opt = (label: string, key: string) => (get(key) ? `${label}: ${get(key)}` : null);

    const lines = [
      `*Admission application — ${site.name}*`,
      '',
      `Parent / guardian: ${get('parent')}`,
      `Phone: ${get('phone')}`,
      opt('Email', 'email'),
      opt('Village / town', 'village'),
      '',
      `Child's name: ${get('child')}`,
      `Date of birth: ${get('dob')}`,
      opt('Gender', 'gender'),
      `Applying for: ${get('class')}`,
      opt('Note', 'note'),
    ].filter((l) => l !== null);

    const link = whatsappLink(lines.join('\n'));
    setSentLink(link);
    window.open(link, '_blank', 'noopener');
  };

  return (
    <div className={`card ${styles.formCard}`} id="apply">
      <div className={styles.header}>
        <span className="eyebrow">Application form</span>
        <h2 className={styles.title}>Start your application</h2>
        <p className={styles.sub}>
          Takes about two minutes. Your details open as a WhatsApp message to the school office — just press send.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset className={styles.group}>
          <legend>Parent or guardian</legend>
          <div className="field">
            <label htmlFor="af-parent">Full name <span className="req">*</span></label>
            <input id="af-parent" name="parent" required type="text" className="input" autoComplete="name" />
          </div>
          <div className={styles.row}>
            <div className="field">
              <label htmlFor="af-phone">Mobile number <span className="req">*</span></label>
              <input id="af-phone" name="phone" required type="tel" inputMode="tel" pattern="[0-9+ ]{10,15}" className="input" placeholder="10-digit mobile number" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="af-email">Email <span className={styles.optional}>(optional)</span></label>
              <input id="af-email" name="email" type="email" className="input" autoComplete="email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="af-village">Village or town <span className={styles.optional}>(optional)</span></label>
            <input id="af-village" name="village" type="text" className="input" placeholder="e.g. Lakhna, Komna, Khariar Road" />
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend>Child</legend>
          <div className="field">
            <label htmlFor="af-child">Child&rsquo;s full name <span className="req">*</span></label>
            <input id="af-child" name="child" required type="text" className="input" />
          </div>
          <div className={styles.row}>
            <div className="field">
              <label htmlFor="af-dob">Date of birth <span className="req">*</span></label>
              <input id="af-dob" name="dob" required type="date" className="input" />
            </div>
            <div className="field">
              <label htmlFor="af-gender">Gender <span className={styles.optional}>(optional)</span></label>
              <select id="af-gender" name="gender" className="input" defaultValue="">
                <option value="">Select</option>
                <option>Girl</option>
                <option>Boy</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="af-class">Applying for class <span className="req">*</span></label>
            <select id="af-class" name="class" required className="input" defaultValue="">
              <option value="" disabled>Select a class</option>
              {classes.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="af-note">Anything we should know? <span className={styles.optional}>(optional)</span></label>
            <textarea id="af-note" name="note" className="input" rows={3} />
          </div>
        </fieldset>

        <label className={styles.consent}>
          <input required type="checkbox" />
          <span>
            I confirm the information is correct and agree to be contacted by {site.name} about this application.
          </span>
        </label>

        <button type="submit" className="btn btn-primary btn-block">
          <WhatsAppIcon size={18} /> Send Application on WhatsApp <ArrowRight size={17} className="arrow" />
        </button>

        {sentLink && (
          <p className={styles.status} role="status">
            <CheckCircle2 size={20} />
            <span>
              WhatsApp should have opened with your application — press <strong>Send</strong> there to submit it.
              If it did not open, <a href={sentLink} target="_blank" rel="noopener noreferrer">tap here</a> or
              call <a href={site.phoneHref}>{site.phone}</a>.
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
