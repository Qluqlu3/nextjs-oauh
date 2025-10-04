import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
