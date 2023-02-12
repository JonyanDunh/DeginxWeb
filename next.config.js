/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  async rewrites() {
    return [
      {
        source: '/proxy/bilibili/api/live/:path*',
        destination: 'https://proxy.deginx.com/bilibili/api/live/:path*',
      },
      {
        source: '/proxy/bilibili/member/:path*',
        destination: 'https://proxy.deginx.com/bilibili/member/:path*',
      },
      {
        source: '/proxy/bilibili/passport/:path*',
        destination: 'https://proxy.deginx.com/bilibili/passport/:path*',
      },
      {
        source: '/proxy/bilibili/api/:path*',
        destination: 'https://proxy.deginx.com/bilibili/api/:path*',
      },
      {
        source: '/proxy/bilibili/index/:path*',
        destination: 'https://proxy.deginx.com/bilibili/index/:path*',
      },
      {
        source: '/proxy/bilibili/test/:path*',
        destination: 'https://proxy.deginx.com/bilibili/test/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
}
