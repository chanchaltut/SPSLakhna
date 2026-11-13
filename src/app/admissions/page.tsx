import React from 'react';
import ApplicationForm from '@/components/admissions/ApplicationForm';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata = pageMetadata(
  'Admissions',
  'Apply for admission to Swagat Public School, Lakhna. Online application for Nursery, LKG, UKG and Class 1 to 5 in Nuapada district, Odisha.',
  '/admissions',
);

export default function AdmissionsPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-cream)', minHeight: '100vh', paddingTop: '100px' }} className="pattern-bg">
      <BreadcrumbJsonLd name="Admissions" path="/admissions" />
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        padding: '60px 24px 120px 24px',
        textAlign: 'center',
      }}>
        <span style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.75)' }}>
          Admissions
        </span>
        <h1 style={{ fontFamily: 'var(--font-baloo)', fontSize: '48px', fontWeight: '800', color: 'white', margin: '12px 0 16px' }}>
          Join Our School Community
        </h1>
        <p style={{ fontFamily: 'var(--font-lato)', fontSize: '18px', color: 'rgba(255,255,255,0.88)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Begin your child's journey in a place where curiosity, care, and confidence grow together.
        </p>
      </div>

      {/* Form pulled up over the banner */}
      <div style={{ maxWidth: '860px', margin: '-60px auto 80px auto', padding: '0 24px' }}>
        <ApplicationForm />
      </div>
    </main>
  );
}
