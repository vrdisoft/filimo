/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    deviceSizes: [360, 512],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.cdn.asset.filimo.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
