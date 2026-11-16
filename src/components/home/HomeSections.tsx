import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Plus, Users, Puzzle, ShieldCheck, Apple, Palette, Handshake,
  MapPin, Phone, Mail, Clock, Navigation,
} from 'lucide-react';
import { LogoMark } from '@/components/ui/Logo';
import { WhatsAppIcon } from '@/components/ui/WhatsAppButton';
import GoogleMapEmbed from '@/components/ui/GoogleMapEmbed';
import { site, whatsappLink, defaultWhatsappText } from '@/lib/site';
import { faqs } from '@/lib/faqs';
import { programs, teachers } from '@/lib/content';
import styles from './home.module.css';

/* ─── Hero ─── */
export function Hero() {
  const facts = [
    { value: site.founded, label: 'Established' },
    { value: 'Nursery – 5', label: 'Classes offered' },
    { value: '1 : 15', label: 'Teacher : students' },
    { value: 'Mon – Sat', label: '8 AM to 2 PM' },
  ];

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <h1>
            <span className={`eyebrow ${styles.heroEyebrow}`}>
              {site.fullName}
            </span>
            <span className={`display ${styles.heroTitle}`}>
              An exceptional start for every <em>little learner</em>
            </span>
          </h1>
          <p className={`lead ${styles.heroLead}`}>
            A welcoming kindergarten and primary school in the heart of {site.address.locality},{' '}
            {site.address.district} — where every child from Nursery to Class 5 gets personal attention
            and a joyful, purposeful education.
          </p>

          <div className={styles.heroActions}>
            <Link href="/admissions" className="btn btn-primary">
              Apply for Admission <ArrowRight size={17} className="arrow" />
            </Link>
            <Link href="/programs" className="btn btn-outline">
              Explore Programs
            </Link>
          </div>

          <dl className={styles.facts}>
            {facts.map((f) => (
              <div key={f.label} className={styles.fact}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className={styles.heroFigure}>
          <div className={styles.heroArch}>
            <Image
              src="/images/hero-classroom.webp"
              alt={`Children drawing and learning with their teacher in a classroom at ${site.fullName}, ${site.address.district}`}
              fill
              priority
              sizes="(max-width: 960px) 92vw, 520px"
              className={styles.heroImage}
            />
          </div>
          <LogoMark size={128} className={styles.heroSeal} />
          <figcaption className={styles.heroNote}>
            <span className={styles.heroNoteDot} aria-hidden="true" />
            <span>
              <strong>Admissions open</strong>
              Limited seats in every class
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ─── About ─── */
export function About() {
  return (
    <section className="section surface-paper">
      <div className={`container ${styles.aboutGrid}`}>
        <div className={styles.aboutMedia}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/gallery/reading.jpg"
              alt={`Story time with a teacher at ${site.fullName}`}
              fill
              sizes="(max-width: 960px) 92vw, 540px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className={styles.aboutQuote}>
            <span>&ldquo;Swagat&rdquo; means welcome.</span>
            It is how every school day begins here.
          </p>
        </div>

        <div>
          <span className="eyebrow">About the school</span>
          <h2 className="title">
            A nurturing space where learning <em>begins with care</em>
          </h2>
          <div className={styles.prose}>
            <p>
              We believe early childhood is a time of wonder, discovery and rapid growth. Our mission is to
              create a safe and inspiring environment where children feel confident to explore, ask questions
              and express themselves freely.
            </p>
            <p>
              We combine structured learning with play-based activities to support each child&rsquo;s
              intellectual, social and emotional development. With small class sizes and dedicated teachers,
              every child receives the attention and encouragement they deserve.
            </p>
          </div>
          <div className={styles.inlineActions}>
            <Link href="/contact" className="btn btn-primary">Book a School Visit</Link>
            <Link href="/about" className="text-link">
              Our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pillars ─── */
const pillars = [
  { title: 'Our Vision', desc: 'A joyful school where children feel safe, confident and excited to learn every day.' },
  { title: 'Our Values', desc: 'Kindness, curiosity and respect guide how we learn, play and grow together.' },
  { title: 'Our Approach', desc: 'Children learn best through play, creativity and hands-on discovery.' },
  { title: 'Our Promise', desc: 'Happy, independent learners who are ready for their next big step.' },
];

export function Pillars() {
  return (
    <section className={`surface-dark ${styles.pillars}`} aria-label="Vision, values, approach and promise">
      <div className={`container ${styles.pillarGrid}`}>
        {pillars.map((p, i) => (
          <div key={p.title} className={styles.pillar}>
            <span className={styles.pillarIndex}>{String(i + 1).padStart(2, '0')}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Programs ─── */
export function Programs() {
  return (
    <section className="section surface-cream">
      <div className="container">
        <div className={styles.splitHead}>
          <div>
            <span className="eyebrow">Our programs</span>
            <h2 className="title">Tailored learning for <em>every age</em></h2>
          </div>
          <p className="lead">
            From Nursery to Class 5, each stage is planned around what children of that age need — so
            every child&rsquo;s abilities are noticed and supported.
          </p>
        </div>

        <ol className={styles.programList}>
          {programs.map((p, i) => (
            <li key={p.title} className={styles.program}>
              <span className={styles.programIndex}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className={styles.programHead}>
                  <h3>{p.title}</h3>
                  <span className={styles.chip}>{p.age}</span>
                </div>
                <p>{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.centerAction}>
          <Link href="/programs" className="text-link">
            See curriculum and daily schedule <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
const features = [
  { icon: Users, title: 'Small class sizes', desc: 'With fewer children in each class, teachers can focus on every little learner and help them build confidence.' },
  { icon: Puzzle, title: 'Play-based curriculum', desc: 'Games, stories and hands-on activities let children explore new ideas through play, imagination and curiosity.' },
  { icon: ShieldCheck, title: 'Safe, cheerful classrooms', desc: 'Bright, child-friendly rooms designed with comfort and safety in mind.' },
  { icon: Apple, title: 'Healthy snacks', desc: 'Balanced snacks that keep growing bodies and curious minds full of energy.' },
  { icon: Palette, title: 'Creative activities', desc: 'Art, music and movement develop fine motor skills and confidence in every child.' },
  { icon: Handshake, title: 'Friendship and kindness', desc: 'Group activities and guided play teach children to share, care and work together.' },
];

export function Features() {
  return (
    <section className="section surface-paper">
      <div className="container">
        <div className="section-head section-head-center">
          <span className="eyebrow eyebrow-center">Why families choose us</span>
          <h2 className="title">Everything your child needs to <em>grow, explore and play</em></h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.feature}>
              <span className={styles.featureIcon}><f.icon size={24} strokeWidth={1.6} /></span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Teachers ─── */
export function Teachers() {
  return (
    <section className="section surface-sand">
      <div className="container">
        <div className={styles.splitHead}>
          <div>
            <span className="eyebrow">Our team</span>
            <h2 className="title">Teachers who know <em>every child by name</em></h2>
          </div>
          <p className="lead">
            Warm, experienced educators who understand the strengths of each child and give them
            personal attention every day.
          </p>
        </div>

        <div className={styles.teacherGrid}>
          {teachers.map((t) => (
            <article key={t.name} className={`card ${styles.teacher}`}>
              <span className={styles.monogram} aria-hidden="true">{t.initials}</span>
              <h3>{t.name}</h3>
              <span className={styles.role}>{t.role}</span>
              <p>{t.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Admission steps ─── */
const steps = [
  { title: 'Submit your application', desc: 'Fill in the short online form with your child’s basic details. It reaches the school office on WhatsApp.' },
  { title: 'Visit the school', desc: 'Meet the teachers, see the classrooms and ask any questions you have.' },
  { title: 'Confirmation and welcome', desc: 'Once enrolment is confirmed, we share everything you need for a smooth first day.' },
];

export function AdmissionSteps() {
  return (
    <section className="section surface-paper">
      <div className="container">
        <div className="section-head section-head-center">
          <span className="eyebrow eyebrow-center">Admissions</span>
          <h2 className="title">A simple, supportive <em>enrolment process</em></h2>
          <p className="lead">
            Admission to {site.name} takes three clear steps, and the school office is glad to
            help at each one.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNumber}>{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className={styles.centerAction}>
          <Link href="/admissions" className="btn btn-primary">
            Start Your Application <ArrowRight size={17} className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
export function FAQSection() {
  return (
    <section className="section surface-cream" id="faq">
      <div className={`container ${styles.faqGrid}`}>
        <div className={styles.faqIntro}>
          <span className="eyebrow">Parents ask</span>
          <h2 className="title">Questions about the school, <em>answered</em></h2>
          <p className="lead">
            Can&rsquo;t find what you are looking for? Message the school office and we will reply as soon as we can.
          </p>
          <a
            href={whatsappLink(defaultWhatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${styles.faqButton}`}
          >
            <WhatsAppIcon size={18} /> Ask on WhatsApp
          </a>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <details key={faq.q} className={styles.faqItem} open={i === 0}>
              <summary>
                <span>{faq.q}</span>
                <Plus size={20} className={styles.faqIcon} aria-hidden="true" />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Visit / map ─── */
export function Visit() {
  return (
    <section className="section surface-paper">
      <div className={`container ${styles.visitGrid}`}>
        <div>
          <span className="eyebrow">Find us</span>
          <h2 className="title">Visit us in <em>{site.address.locality}</em></h2>
          <p className="lead" style={{ marginTop: 18 }}>
            The school is in {site.address.locality}, {site.address.district} district, {site.address.region}, and
            welcomes families from {site.nearby.slice(0, -1).join(', ')} and {site.nearby[site.nearby.length - 1]}.
          </p>

          <address className={styles.visitList}>
            <a href={site.maps.link} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} />
              <span><small>Address</small>{site.address.line}</span>
            </a>
            <a href={site.phoneHref}>
              <Phone size={18} />
              <span><small>Phone and WhatsApp</small>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={18} />
              <span><small>Email</small>{site.email}</span>
            </a>
            <div>
              <Clock size={18} />
              <span><small>School hours</small>{site.hours.label}</span>
            </div>
          </address>

          <a href={site.maps.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Navigation size={16} /> Get Directions
          </a>
        </div>

        <GoogleMapEmbed height="520px" />
      </div>
    </section>
  );
}
