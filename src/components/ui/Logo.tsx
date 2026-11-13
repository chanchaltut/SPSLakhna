import React from 'react';
import styles from './Logo.module.css';

interface LogoMarkProps {
  size?: number;
  className?: string;
  title?: string;
}

/** Swagat Public School crest: a rising sun over an open book, set in a shield. */
export function LogoMark({ size = 48, className, title }: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M32 2 58 10.5V31c0 15.5-11.2 26-26 31C17.200 57 6 46.500 6 31V10.500Z" fill="#F5A623" />
      <path d="M32 5.700 54.500 13v18c0 13.400-9.600 22.600-22.500 27.200C19.100 53.600 9.500 44.400 9.500 31V13Z" fill="#7B3FA0" />
      <g stroke="#F5A623" strokeWidth="2.400" strokeLinecap="round">
        <path d="M32 19v-4M38 20.600l2-3.500M26 20.600l-2-3.500M42.400 25l3.500-2M21.600 25l-3.500-2" />
      </g>
      <path d="M23 31a9 9 0 0 1 18 0Z" fill="#F5A623" />
      <path d="M31 37.500c-3.600-2.500-8.800-3.100-14-2.200v12c5.200-.9 10.400-.3 14 2.200Z" fill="#FFFFFF" />
      <path d="M33 37.500c3.600-2.500 8.800-3.100 14-2.200v12c-5.200-.9-10.400-.3-14 2.200Z" fill="#FFFFFF" />
    </svg>
  );
}

interface LogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md';
}

export default function Logo({ variant = 'default', size = 'md' }: LogoProps) {
  return (
    <span className={`${styles.logo} ${styles[size]} ${variant === 'light' ? styles.light : ''}`}>
      <LogoMark className={styles.mark} />
      <span className={styles.text}>
        <span className={styles.name}>
          <span className={styles.swagat}>Swagat</span> Public School
        </span>
        <span className={styles.place}>Lakhna &middot; Nuapada</span>
      </span>
    </span>
  );
}
