/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      resolveAlias: {
        underscore: 'lodash',
        '@': './src',
      },
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
    },
  },
  images: {
    domains: ['s33.picofile.com', 'www.google.com', 'uploadkon.ir', '212.23.201.81'],
  },
};

module.exports = nextConfig;
