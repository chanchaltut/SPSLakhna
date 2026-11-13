import React from 'react';
import { Palette, Brain } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata = pageMetadata(
  'Academic Programs',
  'Early Years (Nursery, LKG, UKG) and Primary Years (Class 1 to 5) programmes at Swagat Public School, Lakhna, with daily schedule and timings.',
  '/programs',
);

export default function ProgramsPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-cream)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }} className="pattern-bg">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        <BreadcrumbJsonLd name="Programs" path="/programs" />
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <span style={{ fontFamily: 'var(--font-lato)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-primary)' }}>
            What We Offer
          </span>
          <h1 style={{ fontFamily: 'var(--font-baloo)', fontSize: '48px', fontWeight: '800', color: 'var(--color-text-dark)', margin: '16px 0 24px' }}>
            Academic Programs
          </h1>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '18px', lineHeight: '1.7', color: 'var(--color-text-muted)' }}>
            From Nursery to Class 5 — our curriculum is thoughtfully designed to spark curiosity and build a strong foundation for lifelong learning.
          </p>
        </div>

        {/* Program Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          {/* Card 1 */}
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', backgroundColor: 'var(--color-primary)' }}></div>
            <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(123, 63, 160, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--color-primary)' }}>
              <Palette size={32} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-baloo)', fontSize: '28px', color: 'var(--color-text-dark)', marginBottom: '8px' }}>Early Years</h2>
            <p style={{ fontFamily: 'var(--font-lato)', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '16px' }}>Nursery • LKG • UKG | Ages 3–6</p>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '16px', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              Focused on play-based learning, sensory development, basic phonics, and building social skills in a warm, nurturing environment.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Interactive Storytelling', 'Art & Craft Activities', 'Basic Numeracy', 'Motor Skills Development'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-lato)', fontSize: '15px', color: '#444' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', backgroundColor: 'var(--color-teal)' }}></div>
            <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(29, 75, 94, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--color-teal)' }}>
              <Brain size={32} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-baloo)', fontSize: '28px', color: 'var(--color-text-dark)', marginBottom: '8px' }}>Primary Years</h2>
            <p style={{ fontFamily: 'var(--font-lato)', fontWeight: '700', color: 'var(--color-accent)', marginBottom: '16px' }}>Class 1 to 5 | Ages 6–11</p>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '16px', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              A robust curriculum combining core subjects with critical thinking, physical education, and independent learning skills.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Math, Science & EVS', 'Language & Literature', 'Computer Fundamentals', 'Sports & Physical Ed'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-lato)', fontSize: '15px', color: '#444' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-teal)' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Stats Chart area */}
        <div style={{ backgroundColor: '#1D4B5E', borderRadius: '32px', padding: '60px 40px', color: 'white', marginBottom: '80px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', justifyContent: 'space-around', boxShadow: '0 20px 40px rgba(29,75,94,0.2)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontFamily: 'var(--font-baloo)', fontWeight: '800', color: 'var(--color-accent)' }}>1:15</div>
            <div style={{ fontFamily: 'var(--font-lato)', fontSize: '16px', opacity: 0.9, marginTop: '8px' }}>Teacher-to-Student Ratio</div>
          </div>
          <div style={{ width: '1px', height: '80px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontFamily: 'var(--font-baloo)', fontWeight: '800', color: 'var(--color-accent)' }}>100%</div>
            <div style={{ fontFamily: 'var(--font-lato)', fontSize: '16px', opacity: 0.9, marginTop: '8px' }}>Focus on Child Safety</div>
          </div>
          <div style={{ width: '1px', height: '80px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontFamily: 'var(--font-baloo)', fontWeight: '800', color: 'var(--color-accent)' }}>3+</div>
            <div style={{ fontFamily: 'var(--font-lato)', fontSize: '16px', opacity: 0.9, marginTop: '8px' }}>Extracurricular Subjects</div>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '32px 40px', backgroundColor: '#fafafa', borderBottom: '1px solid #eaeaea' }}>
            <h2 style={{ fontFamily: 'var(--font-baloo)', fontSize: '28px', color: 'var(--color-text-dark)', margin: 0 }}>Daily Schedule & Timings</h2>
            <p style={{ fontFamily: 'var(--font-lato)', color: '#666', marginTop: '8px' }}>Our structured routines balance active learning with essential rest.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'var(--font-lato)' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(123, 63, 160, 0.05)' }}>
                  <th style={{ padding: '20px 40px', color: 'var(--color-primary)', fontWeight: '700', borderBottom: '2px solid rgba(123, 63, 160, 0.1)' }}>Activity</th>
                  <th style={{ padding: '20px 40px', color: 'var(--color-primary)', fontWeight: '700', borderBottom: '2px solid rgba(123, 63, 160, 0.1)' }}>Early Years (Nur-UKG)</th>
                  <th style={{ padding: '20px 40px', color: 'var(--color-primary)', fontWeight: '700', borderBottom: '2px solid rgba(123, 63, 160, 0.1)' }}>Primary (Class 1-5)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '20px 40px', fontWeight: '700', color: '#333' }}>Morning Assembly</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>8:00 AM – 8:20 AM</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>8:00 AM – 8:20 AM</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafcfc' }}>
                  <td style={{ padding: '20px 40px', fontWeight: '700', color: '#333' }}>Core Academics</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>8:20 AM – 10:00 AM</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>8:20 AM – 11:00 AM</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '20px 40px', fontWeight: '700', color: '#333' }}>Snack & Recess</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>10:00 AM – 10:30 AM</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>11:00 AM – 11:30 AM</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafcfc' }}>
                  <td style={{ padding: '20px 40px', fontWeight: '700', color: '#333' }}>Creative / PE / Activities</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>10:30 AM – 12:00 PM</td>
                  <td style={{ padding: '20px 40px', color: '#555' }}>11:30 AM – 1:30 PM</td>
                </tr>
                <tr>
                  <td style={{ padding: '20px 40px', fontWeight: '700', color: '#333' }}>Dismissal</td>
                  <td style={{ padding: '20px 40px', color: 'var(--color-primary)', fontWeight: '700' }}>12:00 PM</td>
                  <td style={{ padding: '20px 40px', color: 'var(--color-teal)', fontWeight: '700' }}>2:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
