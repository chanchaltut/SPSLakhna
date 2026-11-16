import React from 'react';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import CTABand from '@/components/ui/CTABand';
import { site } from '@/lib/site';
import styles from '../inner.module.css';

export const metadata = pageMetadata(
  'Blog & School News',
  'News, classroom stories and parenting tips from the teachers of Swagat Public School, Lakhna, Nuapada.',
  '/blog',
);

const blogPosts = [
  {
    category: 'Academics',
    title: 'Nurturing creativity in the classroom',
    desc: 'How art activities build imagination and thinking skills in early learners.',
    image: '/images/gallery/painting.jpg',
  },
  {
    category: 'School life',
    title: 'Outdoor play: why it matters',
    desc: 'The benefits of outdoor activity and free play for growing children.',
    image: '/images/gallery/playground.jpg',
  },
  {
    category: 'Curriculum',
    title: 'The magic of story time',
    desc: 'How daily reading builds vocabulary, empathy and a lifelong love of books.',
    image: '/images/gallery/reading.jpg',
  },
];

export default function BlogPage() {
  return (
    <main>
      <BreadcrumbJsonLd name="Blog" path="/blog" />
      <PageHeader
        crumb="Blog"
        eyebrow="From the classroom"
        title={<>News and notes <em>from our teachers</em></>}
        lead={`Classroom stories, activities and parenting tips from ${site.fullName}.`}
      />

      <section className="section surface-paper">
        <div className={`container ${styles.posts}`}>
          {blogPosts.map((post) => (
            <article key={post.title} className={`card hover-lift ${styles.post}`}>
              <div className={styles.postImage}>
                <Image src={post.image} alt={`${post.title} — ${site.fullName}`} fill sizes="(max-width: 960px) 100vw, 380px" />
              </div>
              <div className={styles.postBody}>
                <span className={styles.postTag}>{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
