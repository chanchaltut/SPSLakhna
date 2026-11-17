import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import CTABand from '@/components/ui/CTABand';
import { site } from '@/lib/site';
import { staff, founder, director } from '@/lib/content';
import { featured } from '@/lib/gallery';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'About Us',
  `About Swagat Public School, Lakhna — English-medium, CBSE-pattern school in Nuapada, Odisha, founded in ${site.founded} by ${founder.name}. Nursery to Class 5 now, permitted up to Class 8.`,
  '/about',
);

const values = [
  { title: 'A nurturing environment', desc: 'A safe and joyful space where every child feels welcome, known and supported.' },
  { title: 'Whole-child growth', desc: 'Academics balanced with character, physical health and creativity.' },
  { title: 'Close to families', desc: 'We work hand in hand with parents, so home and school pull in the same direction.' },
];

export default function AboutPage() {
  const nearby = `${site.nearby.slice(0, -1).join(', ')} and ${site.nearby[site.nearby.length - 1]}`;

  return (
    <main>
      <BreadcrumbJsonLd name="About" path="/about" />
      <PageHeader
        crumb="About"
        eyebrow="Our story"
        title={<>A school built on a <em>warm welcome</em></>}
        lead={`${site.fullName} is an English-medium, CBSE-pattern school in ${site.address.area}, ${site.address.locality}, ${site.address.district} district, ${site.address.region}, caring for children from ${site.grades}.`}
      />

      <section className="section surface-paper">
        <div className={`container ${styles.split}`}>
          <div className={styles.media}>
            <Image
              src={featured.aboutPage}
              alt={`Teachers and students together at the Ganesh Puja celebration at ${site.fullName}, ${site.address.district}`}
              fill
              priority
              sizes="(max-width: 960px) 92vw, 540px"
            />
          </div>
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="title">&ldquo;Swagat&rdquo; means <em>welcome</em></h2>
            <div className={styles.prose}>
              <p>
                <strong>{site.name}</strong> was founded by <strong>{founder.name}</strong> and opened in{' '}
                {site.address.area}, {site.address.locality} in {site.founded} with a simple idea:
                every child who walks through the gate should feel welcome. That is what our name means, and it is
                why our motto is &ldquo;{site.tagline}&rdquo;.
              </p>
              <p>
                Under Director <strong>{director.name}</strong>, the school teaches children from{' '}
                <strong>{site.grades}</strong> in English, following the CBSE pattern, and it is permitted to run
                classes up to <strong>Class 8</strong>.
                Lessons mix structured learning with play, stories, art and hands-on activity, and small classes
                mean each child gets personal attention.
              </p>
              <p>
                The school serves families in {site.address.locality} and nearby parts of {site.address.district} district,
                including {nearby}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2 className="title">Three values behind <em>every school day</em></h2>
          </div>
          <div className={styles.columns}>
            {values.map((v, i) => (
              <div key={v.title} className={styles.column}>
                <span className={styles.columnIndex}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-paper" id="team">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Leadership and staff</span>
            <h2 className="title">The team at <em>{site.name}</em></h2>
          </div>
          <div className={styles.team}>
            {staff.map((p) => (
              <article key={p.id} id={p.id} className={`card ${styles.member}`}>
                <span className={styles.memberMark} aria-hidden="true">{p.initials}</span>
                <div>
                  <h3>{p.name}</h3>
                  <span className={styles.memberRole}>{p.role}</span>
                  <p>{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-cream">
        <div className="container-narrow">
          <div className="section-head">
            <span className="eyebrow">At a glance</span>
            <h2 className="title">{site.name} in <em>brief</em></h2>
          </div>
          <dl className={`card ${styles.factsCard}`}>
            <div className={styles.factRow}><dt>School</dt><dd>{site.name} ({site.shortName})</dd></div>
            <div className={styles.factRow}><dt>Established</dt><dd>{site.founded}</dd></div>
            <div className={styles.factRow}><dt>Founder</dt><dd>{founder.name}</dd></div>
            <div className={styles.factRow}><dt>Director</dt><dd>{director.name}</dd></div>
            <div className={styles.factRow}><dt>Type</dt><dd>Co-educational, English medium, CBSE-pattern curriculum</dd></div>
            <div className={styles.factRow}><dt>Classes now</dt><dd>Nursery, LKG, UKG and Class 1 to Class 5</dd></div>
            <div className={styles.factRow}><dt>Permitted up to</dt><dd>Class 8 (Nursery to Class 8)</dd></div>
            <div className={styles.factRow}><dt>Location</dt><dd><a href={site.maps.link} target="_blank" rel="noopener noreferrer">{site.address.line}, {site.address.country}</a></dd></div>
            <div className={styles.factRow}><dt>Areas served</dt><dd>{site.address.locality}, {nearby}</dd></div>
            <div className={styles.factRow}><dt>School hours</dt><dd>{site.hours.label}</dd></div>
            <div className={styles.factRow}><dt>Phone / WhatsApp</dt><dd><a href={site.phoneHref}>{site.phone}</a> (also WhatsApp), <a href={site.phone2Href}>{site.phone2}</a></dd></div>
            <div className={styles.factRow}><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div className={styles.factRow}><dt>Instagram</dt><dd><a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a></dd></div>
          </dl>
          <p style={{ marginTop: 28 }}>
            <Link href="/programs" className="text-link">See what each class learns <ArrowRight size={16} /></Link>
          </p>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
