import React from 'react';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata = pageMetadata(
  'About Us',
  'Learn about Swagat Public School, Lakhna — a caring kindergarten and primary school in Nuapada district, Odisha, teaching Nursery to Class 5.',
  '/about',
);

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-cream)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }} className="pattern-bg">
      <BreadcrumbJsonLd name="About" path="/about" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-primary)' }}>
          Our Story
        </span>
        <h1 style={{ fontFamily: 'var(--font-baloo)', fontSize: '48px', fontWeight: '800', color: 'var(--color-text-dark)', margin: '16px 0 24px' }}>
          About Swagat Public School
        </h1>
        
        {/* About Us Image */}
        <div style={{ 
          width: '100%', 
          height: '400px', 
          position: 'relative', 
          borderRadius: '24px', 
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
          margin: '40px 0'
        }}>
          <Image 
            src="/images/gallery/reading.jpg" 
            alt="Teacher reading to children at Swagat Public School, Lakhna"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <p style={{ fontFamily: 'var(--font-lato)', fontSize: '18px', lineHeight: '1.8', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Swagat Public School, situated in Lakhna in the Nuapada district of Odisha, is a nurturing learning community dedicated to shaping young minds from Nursery to Class 5. Our mission is to provide quality education in a safe, joyful, and inspiring environment where every child receives the personal attention they deserve.
        </p>
        {/* Core Values Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "60px", textAlign: "left" }}>
          {[ 
            { title: "Nurturing Environment", desc: "A safe and joyful space where every child feels loved and supported." }, 
            { title: "Holistic Growth", desc: "Balancing academics with character building, physical health, and creativity." }, 
            { title: "Community Focused", desc: "Working hand-in-hand with parents to ensure the best outcomes for our students." } 
          ].map((val, i) => (
            <div key={i} style={{ backgroundColor: "white", padding: "32px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "rgba(123, 63, 160, 0.1)", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", fontWeight: "bold", fontSize: "18px" }}>{i+1}</div>
              <h3 style={{ fontFamily: "var(--font-baloo)", fontSize: "22px", color: "var(--color-text-dark)", marginBottom: "12px" }}>{val.title}</h3>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: "15px", color: "var(--color-text-muted)", lineHeight: "1.6" }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
