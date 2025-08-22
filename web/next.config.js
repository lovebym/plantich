/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    optimizePackageImports: ['@/content'],
  },
  images: {
    domains: ['plantich.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/plants/:slug',
        destination: '/plant/:slug',
        permanent: true,
      },
      {
        source: '/conditions/:slug',
        destination: '/condition/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

