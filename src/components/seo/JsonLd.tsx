import React from 'react';
import { site, absoluteUrl } from '@/lib/site';
import { faqs } from '@/lib/faqs';

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide School + WebSite graph. Rendered once in the root layout. */
export function SchoolJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['School', 'Preschool', 'ElementarySchool'],
        '@id': `${site.url}/#school`,
        name: site.name,
        alternateName: [site.shortName, site.fullName, 'SPS'],
        slogan: site.tagline,
        description: site.description,
        url: site.url,
        logo: absoluteUrl('/images/sps-logo-square.png'),
        image: absoluteUrl(site.ogImage),
        email: site.email,
        telephone: site.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.locality,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.countryCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hasMap: site.maps.link,
        areaServed: [
          { '@type': 'Place', name: 'Lakhna' },
          { '@type': 'AdministrativeArea', name: 'Nuapada district, Odisha' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: site.hours.open,
            closes: site.hours.close,
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'admissions',
          telephone: site.phone,
          email: site.email,
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'or'],
        },
        knowsAbout: [
          'Early childhood education',
          'Primary education',
          'Play-based learning',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.fullName,
        alternateName: site.shortName,
        inLanguage: 'en-IN',
        publisher: { '@id': `${site.url}/#school` },
      },
    ],
  };
  return <Script data={data} />;
}

export function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return <Script data={data} />;
}

/** Breadcrumb trail for inner pages, e.g. <BreadcrumbJsonLd name="Admissions" path="/admissions" /> */
export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name, item: absoluteUrl(path) },
    ],
  };
  return <Script data={data} />;
}
