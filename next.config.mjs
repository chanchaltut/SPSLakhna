/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Photos are pre-compressed WebP in several widths; this loader picks the right one.
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
};
export default nextConfig;
