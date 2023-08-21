/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ipfs.nftstorage.link',
      },
      // add pinata here
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
      }
    ],
  },
}

module.exports = nextConfig
