// const createNextIntlPlugin = require('next-intl/plugin');
//
// const withNextIntl = createNextIntlPlugin();
//
// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// module.exports = withNextIntl(nextConfig);
// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
    reactStrictMode: true,
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
