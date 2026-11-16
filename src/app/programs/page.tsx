import React from 'react';
import { Palette, Brain, Check } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import CTABand from '@/components/ui/CTABand';
import { programs } from '@/lib/content';
import { site } from '@/lib/site';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'Academic Programs',
  'Early Years (Nursery, LKG, UKG) and Primary Years (Class 1 to 5) programmes at Swagat Public School, Lakhna, Nuapada, with daily schedule and timings.',
  '/programs',
);

const stages = [
  {
    icon: Palette,
    title: 'Early Years',
    meta: 'Nursery · LKG · UKG — Ages 3 to 6',
    desc: 'Play-based learning, sensory development, first phonics and numbers, and social skills in a warm, caring classroom.',
    points: ['Interactive storytelling', 'Art and craft', 'Basic numeracy', 'Motor skills'],
  },
  {
    icon: Brain,
    title: 'Primary Years',
    meta: 'Class 1 to 5 — Ages 6 to 11',
    desc: 'Core subjects taught alongside critical thinking, physical education and the habits of independent learning.',
    points: ['Maths, Science and EVS', 'Language and literature', 'Computer fundamentals', 'Sports and physical education'],
  },
];

const stats = [
  { value: '8', label: 'Class levels, Nursery to Class 5' },
  { value: '1:15', label: 'Teacher-to-student ratio' },
  { value: '6', label: 'School days a week, Mon to Sat' },
  { value: site.founded, label: `Established in ${site.address.locality}` },
];

const schedule = [
  ['Morning assembly', '8:00 – 8:20 AM', '8:00 – 8:20 AM'],
  ['Core academics', '8:20 – 10:00 AM', '8:20 – 11:00 AM'],
  ['Snack and recess', '10:00 – 10:30 AM', '11:00 – 11:30 AM'],
  ['Creative, PE and activities', '10:30 AM – 12:00 PM', '11:30 AM – 1:30 PM'],
  ['Dismissal', '12:00 PM', '2:00 PM'],
];

export default function ProgramsPage() {
  return (
    <main>
      <BreadcrumbJsonLd name="Programs" path="/programs" />
      <PageHeader
        crumb="Programs"
        eyebrow="What we offer"
        title={<>Learning that grows <em>with your child</em></>}
        lead={`From Nursery to Class 5, the curriculum at ${site.fullName} is designed to spark curiosity and build a strong foundation for lifelong learning.`}
      />

      <section className="section surface-paper">
        <div className="container">
          <div className={styles.stages}>
            {stages.map((s, i) => (
              <article key={s.title} className={`card ${styles.stage} ${i === 1 ? styles.stageAlt : ''}`}>
                <span className={styles.stageIcon}><s.icon size={26} strokeWidth={1.6} /></span>
                <h2>{s.title}</h2>
                <p className={styles.stageMeta}>{s.meta}</p>
                <p>{s.desc}</p>
                <ul className={styles.checkList}>
                  {s.points.map((p) => (
                    <li key={p}><Check size={17} strokeWidth={2.4} /> {p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={`${styles.stats} ${styles.mt}`}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Class by class</span>
            <h2 className="title">What each stage <em>focuses on</em></h2>
          </div>
          <ul className={styles.classList}>
            {programs.map((p) => (
              <li key={p.title}>
                <h3>{p.title} <span>{p.age}</span></h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section surface-paper">
        <div className="container">
          <div className={`card ${styles.tableCard}`}>
            <div className={styles.tableHead}>
              <span className="eyebrow">A typical day</span>
              <h2 style={{ marginTop: 12 }}>Daily schedule and timings</h2>
              <p>Routines that balance focused learning with play and rest. School runs {site.hours.label.replace(':', ',')}.</p>
            </div>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Early Years (Nursery – UKG)</th>
                    <th scope="col">Primary (Class 1 – 5)</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map(([activity, early, primary]) => (
                    <tr key={activity}>
                      <th scope="row">{activity}</th>
                      <td>{early}</td>
                      <td>{primary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
