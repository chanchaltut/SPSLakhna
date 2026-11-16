import React from 'react';
import { site, absoluteUrl } from '@/lib/site';
import { faqs } from '@/lib/faqs';
import { programs } from '@/lib/content';

const sameAs = Object.values(site.socials).filter(Boolean);

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
        logo: absoluteUrl(site.logoPng),
        image: [absoluteUrl(site.ogImage), absoluteUrl(site.logoPng)],
        foundingDate: site.founded,
        email: site.email,
        telephone: site.phoneE164,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.locality,
          addressLocality: site.address.locality,
          addressSubdivision: `${site.address.district} district`,
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
          { '@type': 'Place', name: `${site.address.locality}, ${site.address.district}, ${site.address.region}` },
          ...site.nearby.map((town) => ({ '@type': 'Place', name: `${town}, ${site.address.district} district, ${site.address.region}` })),
          { '@type': 'AdministrativeArea', name: `${site.address.district} district, ${site.address.region}` },
        ],
        keywords: [
          `school in ${site.address.locality}`,
          `primary school in ${site.address.district}`,
          `kindergarten in ${site.address.locality} ${site.address.district}`,
          `Nursery LKG UKG admission ${site.address.locality}`,
          ...site.nearby.map((town) => `school near ${town}`),
        ].join(', '),
        ...(sameAs.length ? { sameAs } : {}),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Classes offered',
          itemListElement: programs.map((p) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: `${p.title} at ${site.fullName}`,
              description: `${p.desc} For children aged ${p.age.replace(' – ', ' to ')}.`,
              provider: { '@id': `${site.url}/#school` },
            },
          })),
        },
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
          telephone: site.phoneE164,
          email: site.email,
          url: site.whatsappHref,
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: site.hours.open,
            closes: site.hours.close,
          },
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
