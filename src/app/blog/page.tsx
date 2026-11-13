import React from 'react';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata = pageMetadata(
  'Blog & School News',
  'News, classroom stories and parenting tips from the teachers of Swagat Public School, Lakhna, Nuapada.',
  '/blog',
);

const blogPosts = [
  {
    id: 1,
    category: 'ACADEMICS',
    title: 'Nurturing Creativity in the Classroom',
    desc: 'Discover how our art programs inspire imagination and cognitive development in early learners.',
    image: '/images/gallery/painting.jpg'
  },
  {
    id: 2,
    category: 'EVENTS',
    title: 'Outdoor Play: Why It Matters',
    desc: 'Exploring the tremendous benefits of outdoor activities and unstructured play on the playground.',
    image: '/images/gallery/playground.jpg'
  },
  {
    id: 3,
    category: 'CURRICULUM',
    title: 'The Magic of Storytime',
    desc: 'How daily reading sessions build vocabulary, empathy, and a lifelong love for literature.',
    image: '/images/gallery/reading.jpg'
  }
];

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-white)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }} className="pattern-bg">
      <BreadcrumbJsonLd name="Blog" path="/blog" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-baloo)', fontSize: '48px', color: 'var(--color-text-dark)', textAlign: 'center', marginBottom: '48px' }}>
          Latest News & Updates
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(350px, 100%), 1fr))', gap: '32px' }}>
          {blogPosts.map((post) => (
            <article key={post.id} className="hover-lift" style={{
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.05)',
              overflow: 'hidden',
              backgroundColor: 'white',
            }}>
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: '800', letterSpacing: '1px' }}>{post.category}</span>
                <h2 style={{ fontFamily: 'var(--font-baloo)', fontSize: '24px', margin: '8px 0', color: 'var(--color-text-dark)' }}>{post.title}</h2>
                <p style={{ fontFamily: 'var(--font-lato)', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{post.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
