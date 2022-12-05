/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
};

module.exports = nextConfig
