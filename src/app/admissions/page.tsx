import React from 'react';
import { Phone } from 'lucide-react';
import ApplicationForm from '@/components/admissions/ApplicationForm';
import PageHeader from '@/components/ui/PageHeader';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { site, whatsappLink, defaultWhatsappText } from '@/lib/site';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'Admissions',
  'Apply for admission to Swagat Public School, Lakhna — English-medium, CBSE-pattern school in Nuapada, Odisha. Nursery, LKG, UKG and Class 1 to 5 admissions open. Call or WhatsApp +91 84579 69611.',
  '/admissions',
);

const steps = [
  { title: 'Send the application', desc: 'Fill in the form. It opens as a WhatsApp message to the school office.' },
  { title: 'Visit the school', desc: 'Meet the teachers and see the classrooms with your child.' },
  { title: 'Confirm the seat', desc: 'The office confirms enrolment and shares what to bring on day one.' },
];

const ages = [
  ['Nursery', '3 – 4 years'],
  ['LKG', '4 – 5 years'],
  ['UKG', '5 – 6 years'],
  ['Class 1 – 5', '6 – 11 years'],
];

export default function AdmissionsPage() {
  return (
    <main>
      <BreadcrumbJsonLd name="Admissions" path="/admissions" />
      <PageHeader
        crumb="Admissions"
        eyebrow="Admissions open"
        title={<>Join the <em>Swagat family</em></>}
        lead={`Begin your child's journey at ${site.fullName} — a place where curiosity, care and confidence grow together. Admissions are open for ${site.grades}; the school is permitted to run classes up to Class 8.`}
      />

      <section className="section surface-paper">
        <div className={`container ${styles.admitGrid}`}>
          <aside className={styles.aside}>
            <span className="eyebrow">How it works</span>
            <h2>Three steps to enrolment</h2>
            <ol className={styles.stepList}>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span>{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.note}>
              <h3>Age guide</h3>
              <ul>
                {ages.map(([cls, age]) => (
                  <li key={cls}><span>{cls}</span><span>{age}</span></li>
                ))}
              </ul>
            </div>

            <div className={styles.contactLinks}>
              <a href={site.phoneHref} className="btn btn-outline btn-sm"><Phone size={16} /> {site.phone}</a>
              <a href={site.phone2Href} className="btn btn-outline btn-sm"><Phone size={16} /> {site.phone2}</a>
              <a href={whatsappLink(defaultWhatsappText)} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
            </div>
          </aside>

          <ApplicationForm />
        </div>
      </section>
    </main>
  );
}
