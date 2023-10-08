const pwaCaching = require('./pwa-caching')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  runtimeCaching: pwaCaching,
  dynamicStartUrl: false,
})

const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
}

module.exports =
  process.env.NODE_ENV === 'production' ? withPWA(nextConfig) : nextConfig
