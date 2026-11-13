import React from 'react';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata = pageMetadata(
  'Photo Gallery',
  'Photos of classroom learning, art, music, play and outdoor activities at Swagat Public School, Lakhna, Nuapada.',
  '/gallery',
);

const galleryImages = [
  { src: '/images/gallery/painting.jpg', alt: 'Children painting in a colourful classroom', title: 'Creative Arts' },
  { src: '/images/gallery/blocks.jpg', alt: 'Young children playing with wooden blocks', title: 'Play-Based Learning' },
  { src: '/images/gallery/reading.jpg', alt: 'Teacher reading a storybook to the class', title: 'Story Time' },
  { src: '/images/gallery/playground.jpg', alt: 'Children running on the playground', title: 'Outdoor Activities' },
  { src: '/images/gallery/science.jpg', alt: 'Children exploring small plants', title: 'Nature Exploration' },
  { src: '/images/gallery/music.jpg', alt: 'Children playing musical instruments', title: 'Music & Movement' },
];

export default function GalleryPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-cream)', minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }} className="pattern-bg">
      <BreadcrumbJsonLd name="Gallery" path="/gallery" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-primary)' }}>
            Photo Gallery
          </span>
          <h1 style={{ fontFamily: 'var(--font-baloo)', fontSize: '48px', color: 'var(--color-text-dark)', marginTop: '8px' }}>
            Our Moments of Joy
          </h1>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '16px', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '16px auto 0' }}>
            Take a peek into the daily adventures, learning, and friendships that blossom in our classrooms every single day.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))', gap: '32px' }}>
          {galleryImages.map((img, i) => (
            <figure key={i} className="hover-lift" style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: 'white',
            }}>
              <div style={{ position: 'relative', width: '100%', height: '260px' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <figcaption style={{ padding: '20px', backgroundColor: 'white', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: 'var(--font-baloo)', fontSize: '20px', margin: 0, color: 'var(--color-text-dark)' }}>
                  {img.title}
                </h2>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
