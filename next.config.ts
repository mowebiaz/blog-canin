import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const urls = [
  new URL('https://pub-53e8c9aaa9a14081b610f6067538a5af.r2.dev/**'),
  new URL('https://pub-ecc429aa861d421ab9073cc04447cfc1.r2.dev/**'),
  //new URL('https://my-custom-domain.com'),
]

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: urls
  },

  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
