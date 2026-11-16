import React from 'react';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import CTABand from '@/components/ui/CTABand';
import { site } from '@/lib/site';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'Photo Gallery',
  'Photos of classroom learning, art, music, play and outdoor activities at Swagat Public School, Lakhna, Nuapada.',
  '/gallery',
);

const galleryImages = [
  { src: '/images/gallery/painting.jpg', alt: 'Children painting in a colourful classroom', title: 'Creative arts' },
  { src: '/images/gallery/blocks.jpg', alt: 'Young children playing with wooden blocks', title: 'Play-based learning' },
  { src: '/images/gallery/reading.jpg', alt: 'Teacher reading a storybook to the class', title: 'Story time' },
  { src: '/images/gallery/playground.jpg', alt: 'Children running on the playground', title: 'Outdoor play' },
  { src: '/images/gallery/science.jpg', alt: 'Children exploring small plants', title: 'Nature exploration' },
  { src: '/images/gallery/music.jpg', alt: 'Children playing musical instruments', title: 'Music and movement' },
];

export default function GalleryPage() {
  return (
    <main>
      <BreadcrumbJsonLd name="Gallery" path="/gallery" />
      <PageHeader
        crumb="Gallery"
        eyebrow="Photo gallery"
        title={<>Moments of <em>joy and discovery</em></>}
        lead="A look at the daily adventures, learning and friendships that fill our classrooms."
      />

      <section className="section surface-paper">
        <div className={`container ${styles.gallery}`}>
          {galleryImages.map((img) => (
            <figure key={img.src} className={styles.shot}>
              <Image
                src={img.src}
                alt={`${img.alt} — ${site.fullName}`}
                fill
                sizes="(max-width: 720px) 100vw, 60vw"
              />
              <figcaption>{img.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
