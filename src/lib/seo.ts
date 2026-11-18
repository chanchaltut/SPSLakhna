import type { Metadata } from 'next';
import { site } from './site';

/** The shared link-preview image (WhatsApp, Facebook, X, LinkedIn, Telegram). */
export const ogImages = [
  {
    url: site.ogImage,
    secureUrl: `${site.url}${site.ogImage}`,
    width: 1200,
    height: 630,
    type: site.ogImageType,
    alt: site.ogImageAlt,
  },
];

/** Metadata for an inner page: unique title, description, canonical, hreflang and matching social tags. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${site.fullName}`;
  return {
    title,
    description,
    alternates: { canonical: path, languages: { 'en-IN': path, 'x-default': path } },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.fullName,
      images: ogImages,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [{ url: site.ogImage, alt: site.ogImageAlt }],
    },
  };
}
