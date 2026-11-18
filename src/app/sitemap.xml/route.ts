import { site, absoluteUrl } from '@/lib/site';
import { allPhotos, featured, photoBySrc, events } from '@/lib/gallery';

/**
 * XML sitemap with Google image extensions, so the school's real photos can be found
 * in image search for local queries. (Next 14's sitemap.ts has no image support.)
 */
export const dynamic = 'force-static';

type Img = { loc: string; title: string; caption: string };
type Route = { path: string; changefreq: string; priority: string; images: Img[] };

const place = `${site.fullName}, ${site.address.district}, ${site.address.region}`;
const img = (src: string): Img => {
  const p = photoBySrc(src);
  return { loc: absoluteUrl(src), title: `${p.caption} — ${site.fullName}`, caption: `${p.alt} at ${place}` };
};

const latestEvent = events[0]?.date ?? '2026-11-14';

const routes: Route[] = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    images: [
      { loc: absoluteUrl(site.ogImage), title: `${site.fullName} — English medium school in ${site.address.district}`, caption: site.ogImageAlt },
      img(featured.hero),
      img(featured.about),
      ...featured.home.map(img),
    ],
  },
  { path: '/about', changefreq: 'monthly', priority: '0.8', images: [img(featured.aboutPage)] },
  { path: '/programs', changefreq: 'monthly', priority: '0.9', images: [] },
  { path: '/admissions', changefreq: 'monthly', priority: '0.9', images: [] },
  {
    path: '/gallery',
    changefreq: 'weekly',
    priority: '0.7',
    images: allPhotos.map((p) => ({
      loc: absoluteUrl(p.src),
      title: `${p.caption} — ${p.album.title}, ${site.fullName}`,
      caption: `${p.alt} at ${place}`,
    })),
  },
  { path: '/blog', changefreq: 'weekly', priority: '0.7', images: [] },
  { path: '/contact', changefreq: 'yearly', priority: '0.8', images: [] },
];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export function GET() {
  const body = routes
    .map((r) => {
      const loc = absoluteUrl(r.path);
      const images = r.images
        .map(
          (i) =>
            `    <image:image>\n      <image:loc>${esc(i.loc)}</image:loc>\n      <image:title>${esc(i.title)}</image:title>\n      <image:caption>${esc(i.caption)}</image:caption>\n    </image:image>`,
        )
        .join('\n');
      return [
        '  <url>',
        `    <loc>${esc(loc)}</loc>`,
        `    <xhtml:link rel="alternate" hreflang="en-IN" href="${esc(loc)}"/>`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(loc)}"/>`,
        `    <lastmod>${latestEvent}</lastmod>`,
        `    <changefreq>${r.changefreq}</changefreq>`,
        `    <priority>${r.priority}</priority>`,
        images,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
