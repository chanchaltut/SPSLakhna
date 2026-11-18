import React from 'react';
import { site, absoluteUrl } from '@/lib/site';
import { faqs } from '@/lib/faqs';
import { programs, staff, founder, activities, entranceCoaching } from '@/lib/content';
import { events, allPhotos, featured } from '@/lib/gallery';

const sameAs = Object.values(site.socials).filter(Boolean);
const schoolId = `${site.url}/#school`;
const personId = (id: string) => `${site.url}/#${id}`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressSubdivision: `${site.address.block} block, ${site.address.district} district`,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.countryCode,
};

const schoolPlace = {
  '@type': 'Place',
  name: site.fullName,
  address: postalAddress,
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
};

/** Lakhna -> Komna block -> Nuapada district -> Odisha -> India, so engines can place the school precisely. */
const lakhnaPlace = {
  '@type': 'Place',
  '@id': `${site.url}/#lakhna`,
  name: `${site.address.locality} (${site.address.area}), ${site.address.district}, ${site.address.region}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  containedInPlace: {
    '@type': 'AdministrativeArea',
    name: `${site.address.block} block`,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: `${site.address.district} district`,
      containedInPlace: {
        '@type': 'State',
        name: site.address.region,
        containedInPlace: { '@type': 'Country', name: site.address.country },
      },
    },
  },
};

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
        '@id': schoolId,
        name: site.name,
        alternateName: [site.fullName, ...site.alsoKnownAs],
        slogan: site.tagline,
        description: site.description,
        url: site.url,
        logo: {
          '@type': 'ImageObject',
          '@id': `${site.url}/#logo`,
          url: absoluteUrl(site.logoPng),
          contentUrl: absoluteUrl(site.logoPng),
          width: 1024,
          height: 1024,
          caption: `${site.fullName} school seal, established ${site.founded}`,
        },
        isicV4: '8510',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: staff.length },
        location: { '@id': `${site.url}/#lakhna` },
        image: [
          absoluteUrl(featured.about),
          absoluteUrl(featured.hero),
          absoluteUrl(site.ogImage),
          absoluteUrl(site.logoPng),
        ],
        foundingDate: site.founded,
        founder: { '@id': personId(founder.id) },
        employee: staff.map((p) => ({ '@id': personId(p.id) })),
        email: site.email,
        telephone: [site.phoneE164, site.phone2E164],
        address: postalAddress,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hasMap: site.maps.link,
        areaServed: [
          { '@type': 'Place', name: `${site.address.area}, ${site.address.locality}, ${site.address.district}, ${site.address.region}` },
          { '@type': 'AdministrativeArea', name: `${site.address.block} block, ${site.address.district} district, ${site.address.region}` },
          ...site.nearby.map((town) => ({ '@type': 'Place', name: `${town}, ${site.address.district} district, ${site.address.region}` })),
          { '@type': 'AdministrativeArea', name: `${site.address.district} district, ${site.address.region}` },
        ],
        keywords: [
          `school in ${site.address.locality}`,
          `English medium school in ${site.address.locality}`,
          `CBSE pattern school in ${site.address.district}`,
          `school in ${site.address.block} block`,
          `school in ${site.address.area} ${site.address.locality}`,
          `${founder.name.replace('Mr. ', '')} ${site.name}`,
          `primary school in ${site.address.district}`,
          `kindergarten in ${site.address.locality} ${site.address.district}`,
          `Nursery LKG UKG admission ${site.address.locality}`,
          ...site.nearby.map((town) => `school near ${town}`),
          `best school in ${site.address.locality}`,
          `Navodaya entrance coaching in ${site.address.locality}`,
          `Sainik School coaching in ${site.address.district}`,
          'Swagat Play School',
        ].join(', '),
        ...(sameAs.length ? { sameAs } : {}),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Classes offered',
          itemListElement: [
            ...programs.map((p) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: `${p.title} at ${site.fullName}`,
                description: `${p.desc} For children aged ${p.age.replace(' – ', ' to ')}.`,
                inLanguage: 'en',
                provider: { '@id': schoolId },
              },
            })),
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                '@id': `${site.url}/programs#entrance-coaching`,
                name: `${entranceCoaching.title} at ${site.fullName}`,
                description: `${entranceCoaching.desc} Exams: ${entranceCoaching.exams.join(', ')}.`,
                educationalLevel: entranceCoaching.classes,
                inLanguage: 'en',
                url: absoluteUrl('/programs#entrance-coaching'),
                provider: { '@id': schoolId },
              },
            },
          ],
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
          telephone: [site.phoneE164, site.phone2E164],
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
          'English-medium education',
          'CBSE-pattern curriculum',
          'Play-based learning',
          'Navodaya Vidyalaya entrance test preparation',
          'Sainik School entrance test preparation',
          ...activities,
        ],
      },
      lakhnaPlace,
      ...staff.map((p) => ({
        '@type': 'Person',
        '@id': personId(p.id),
        name: p.name.replace(/^(Mr|Mrs|Ms)\. /, ''),
        honorificPrefix: p.honorific,
        givenName: p.givenName,
        familyName: p.familyName,
        jobTitle: p.role,
        description: `${p.role} at ${site.fullName}, ${site.address.district}, ${site.address.region}. ${p.bio}`,
        worksFor: { '@id': schoolId },
        memberOf: { '@id': schoolId },
        affiliation: { '@id': schoolId },
        workLocation: schoolPlace,
        url: `${site.url}/about#${p.id}`,
      })),
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.fullName,
        alternateName: site.shortName,
        inLanguage: 'en-IN',
        publisher: { '@id': `${site.url}/#school` },
        about: { '@id': schoolId },
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

/** Photo gallery as an ImageGallery of ImageObjects. */
export function GalleryJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${site.url}/gallery#gallery`,
    name: `Photo gallery — ${site.fullName}`,
    description: `Photos of celebrations, activities and classroom life at ${site.fullName}, ${site.address.district}, ${site.address.region}.`,
    url: absoluteUrl('/gallery'),
    about: { '@id': schoolId },
    associatedMedia: allPhotos.map((p) => ({
      '@type': 'ImageObject',
      contentUrl: absoluteUrl(p.src),
      width: p.width,
      height: p.height,
      caption: `${p.caption} — ${p.album.title}, ${site.fullName}`,
      description: `${p.alt} at ${site.fullName}, ${site.address.district}, ${site.address.region}.`,
      ...(p.album.date ? { dateCreated: p.album.date } : {}),
      contentLocation: schoolPlace,
      creditText: site.fullName,
      copyrightHolder: { '@id': schoolId },
    })),
  };
  return <Script data={data} />;
}

/** School events (past celebrations) with photos, date and place. */
export function EventsJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': events.map((e) => ({
      '@type': 'Event',
      '@id': `${site.url}/gallery#${e.id}`,
      name: `${e.title} at ${site.fullName}`,
      description: e.summary,
      startDate: e.date,
      endDate: e.date,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: schoolPlace,
      organizer: { '@type': 'School', '@id': schoolId, name: site.name, url: site.url },
      image: e.photos.map((p) => absoluteUrl(p.src)),
      url: absoluteUrl(`/gallery#${e.id}`),
    })),
  };
  return <Script data={data} />;
}

/** School news page: one NewsArticle per dated event. */
export function NewsJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': events.map((e) => ({
      '@type': 'NewsArticle',
      headline: `${e.title} at ${site.fullName}`,
      description: e.summary,
      datePublished: e.date,
      image: e.photos.map((p) => absoluteUrl(p.src)),
      author: { '@type': 'Organization', '@id': schoolId, name: site.fullName, url: site.url },
      publisher: { '@id': schoolId },
      contentLocation: schoolPlace,
      mainEntityOfPage: absoluteUrl(`/blog#${e.id}`),
      about: { '@id': `${site.url}/gallery#${e.id}` },
    })),
  };
  return <Script data={data} />;
}

