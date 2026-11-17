import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, NewsJsonLd } from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import CTABand from '@/components/ui/CTABand';
import { site } from '@/lib/site';
import { events, formatDate } from '@/lib/gallery';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'School News & Events',
  "News and events from Swagat Public School, Lakhna, Nuapada: Children's Day, Ganesh Puja, Janmashtami, Independence Day, Nutrition Month and National Deworming Day.",
  '/blog',
);

export default function BlogPage() {
  return (
    <main>
      <BreadcrumbJsonLd name="School News" path="/blog" />
      <NewsJsonLd />
      <PageHeader
        crumb="School News"
        eyebrow="From the school"
        title={<>News and <em>events</em></>}
        lead={`Celebrations, health days and activities at ${site.fullName}, ${site.address.locality}, ${site.address.district}.`}
      />

      <section className="section surface-paper">
        <div className={`container ${styles.posts}`}>
          {events.map((e) => {
            const cover = e.photos[0];
            return (
              <article key={e.id} id={e.id} className={`card hover-lift ${styles.post}`}>
                <div className={styles.postImage}>
                  <Image
                    src={cover.src}
                    alt={`${cover.alt} at ${site.fullName}, ${site.address.locality}`}
                    fill
                    sizes="(max-width: 960px) 100vw, 380px"
                  />
                </div>
                <div className={styles.postBody}>
                  <span className={styles.postTag}>
                    {e.category} &middot; <time dateTime={e.date}>{formatDate(e.date!)}</time>
                  </span>
                  <h2>{e.title}</h2>
                  <p>{e.summary}</p>
                  <Link href={`/gallery#${e.id}`} className="text-link" style={{ marginTop: 14 }}>
                    {e.photos.length} {e.photos.length === 1 ? 'photo' : 'photos'} <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
