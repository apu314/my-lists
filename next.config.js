/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
