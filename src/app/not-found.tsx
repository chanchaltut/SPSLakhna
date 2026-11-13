import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LogoMark } from '@/components/ui/Logo';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      className="pattern-bg"
      style={{ backgroundColor: 'var(--color-bg-cream)', minHeight: '100vh', padding: '160px 24px 100px', textAlign: 'center' }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <LogoMark size={88} />
        <p style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-primary)', marginTop: '24px' }}>
          Error 404
        </p>
        <h1 style={{ fontFamily: 'var(--font-baloo)', fontSize: '44px', fontWeight: 800, color: 'var(--color-text-dark)', margin: '8px 0 16px', lineHeight: 1.1 }}>
          This page could not be found
        </h1>
        <p style={{ fontFamily: 'var(--font-lato)', fontSize: '17px', lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: '32px' }}>
          The link may be old or the address may be mistyped. You can go back to the home page or contact the school.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-primary)', color: 'white', padding: '14px 28px', borderRadius: '50px', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '16px' }}
          >
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', color: 'var(--color-primary)', border: '2px solid var(--color-primary-light)', padding: '12px 28px', borderRadius: '50px', fontFamily: 'var(--font-baloo)', fontWeight: 700, fontSize: '16px' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
