import type { Metadata } from 'next';
import { site } from './site';

/** Metadata for an inner page: unique title, description, canonical and matching social tags. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${site.fullName}`;
  const images = [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.fullName} — ${site.tagline}` }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.fullName,
      images,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}
