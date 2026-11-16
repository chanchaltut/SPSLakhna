import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  /** Label of the current page in the breadcrumb trail. */
  crumb: string;
}

/** Shared heading block for inner pages: breadcrumb, eyebrow, H1 and intro. */
export default function PageHeader({ eyebrow, title, lead, crumb }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">{crumb}</span>
        </nav>
        <div className={styles.inner}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className={`display ${styles.title}`}>{title}</h1>
          {lead && <p className={`lead ${styles.lead}`}>{lead}</p>}
        </div>
      </div>
    </header>
  );
}
