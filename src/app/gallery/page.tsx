import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, GalleryJsonLd, EventsJsonLd } from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import CTABand from '@/components/ui/CTABand';
import { site } from '@/lib/site';
import { albums, formatDate } from '@/lib/gallery';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'Photo Gallery',
  "Real photos from Swagat Public School, Lakhna, Nuapada: Independence Day, Janmashtami, Ganesh Puja, Children's Day, yoga, drawing and everyday classroom life.",
  '/gallery',
);

export default function GalleryPage() {
  return (
    <main>
      <BreadcrumbJsonLd name="Gallery" path="/gallery" />
      <GalleryJsonLd />
      <EventsJsonLd />
      <PageHeader
        crumb="Gallery"
        eyebrow="Photo gallery"
        title={<>Moments of <em>joy and discovery</em></>}
        lead={`Celebrations, activities and everyday classroom life at ${site.fullName}, ${site.address.district}.`}
      />

      <section className="section surface-paper">
        <div className="container">
          <nav className={styles.albumNav} aria-label="Albums">
            {albums.map((a) => (
              <a key={a.id} href={`#${a.id}`}>{a.title}</a>
            ))}
          </nav>

          {albums.map((a) => (
            <section key={a.id} id={a.id} className={styles.album} aria-labelledby={`${a.id}-title`}>
              <header className={styles.albumHead}>
                <span className="eyebrow">
                  {a.category}
                  {a.date && <> &middot; <time dateTime={a.date}>{formatDate(a.date)}</time></>}
                </span>
                <h2 id={`${a.id}-title`}>{a.title}</h2>
                <p>{a.summary}</p>
              </header>

              <div className={a.posters ? styles.posterGrid : styles.gallery}>
                {a.photos.map((img) => (
                  <figure key={img.src} className={a.posters ? styles.poster : styles.shot}>
                    <a href={img.src} target="_blank" rel="noopener" aria-label={`Open full size: ${img.caption}`}>
                      <Image
                        src={img.src}
                        alt={`${img.alt} at ${site.fullName}, ${site.address.locality}, ${site.address.district}`}
                        fill
                        sizes={a.posters ? '(max-width: 720px) 50vw, 240px' : '(max-width: 720px) 100vw, 400px'}
                      />
                    </a>
                    <figcaption>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}

          {site.socials.instagram && (
            <p className={styles.galleryFoot}>
              More photos and updates on Instagram:{' '}
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
                <Instagram size={16} /> {site.instagramHandle}
              </a>
            </p>
          )}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
