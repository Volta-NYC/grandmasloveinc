/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export so the site runs independently of any backend or the
  // original Wix-hosted website. All media is served from /public.
  output: "export",
  trailingSlash: true,
  images: {
    // Required for `output: export` — images are pre-optimized in the media
    // pipeline (scripts/optimize-media.mjs) rather than at request time.
    unoptimized: true,
  },
};

export default nextConfig;
