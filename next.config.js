/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['seeklogo.com'],
  }
}

module.exports = nextConfig
