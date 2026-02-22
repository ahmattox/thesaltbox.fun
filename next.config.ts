import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['tsx'],
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
