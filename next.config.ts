import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', '@chakra-ui/icons', 'framer-motion'],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 200,
      }
    }
    return config
  },
}

export default nextConfig
