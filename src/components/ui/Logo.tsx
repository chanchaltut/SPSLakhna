import React from 'react';
import styles from './Logo.module.css';
import { site } from '@/lib/site';

interface LogoMarkProps {
  size?: number;
  className?: string;
  /** Pass an empty string when the seal sits next to the school name in text. */
  alt?: string;
}

/** Swagat Public School seal: a lotus rising from an open book, ringed with the school name. */
export function LogoMark({ size = 48, className, alt = `${site.fullName} school seal` }: LogoMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={site.logo}
      alt={alt}
      width={size}
      height={size}
      className={className}
      decoding="async"
    />
  );
}

interface LogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md';
}

export default function Logo({ variant = 'default', size = 'md' }: LogoProps) {
  return (
    <span className={`${styles.logo} ${styles[size]} ${variant === 'light' ? styles.light : ''}`}>
      <LogoMark className={styles.mark} alt="" size={size === 'sm' ? 44 : 52} />
      <span className={styles.text}>
        <span className={styles.name}>Swagat Public School</span>
        <span className={styles.place}>Lakhna &middot; Nuapada &middot; Estd {site.founded}</span>
      </span>
    </span>
  );
}
