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
    <main className="section" style={{ textAlign: 'center', minHeight: '70vh' }}>
      <div className="container-narrow" style={{ maxWidth: 560 }}>
        <LogoMark size={104} />
        <p className="eyebrow eyebrow-center" style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>Error 404</p>
        <h1 className="title">This page could not be found</h1>
        <p className="lead" style={{ margin: '16px 0 32px' }}>
          The link may be old or the address may be mistyped. You can go back to the home page or contact the school.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Back to Home <ArrowRight size={16} className="arrow" /></Link>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
