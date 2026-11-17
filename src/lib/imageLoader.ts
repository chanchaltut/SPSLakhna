import { imageVariants } from './image-variants';

/**
 * next/image loader for pre-sized static WebP files (the site does not use
 * on-the-fly image optimisation). Picks the smallest stored width that covers
 * the requested width, falling back to the full-size original.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const widths = imageVariants[src];
  if (!widths) return src;
  const w = widths.find((v) => v >= width);
  return w ? src.replace(/\.webp$/, `-w${w}.webp`) : src;
}
