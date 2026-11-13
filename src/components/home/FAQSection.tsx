import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';
import { faqs } from '@/lib/faqs';

export default function FAQSection() {
  return (
    <section className={`${styles.sectionWrapper} pattern-bg`} id="faq">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Parents Ask</span>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <details key={i} className={styles.item} open={i === 0}>
            <summary className={styles.question}>
              <span>{faq.q}</span>
              <ChevronDown size={20} className={styles.chevron} />
            </summary>
            <p className={styles.answer}>{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
