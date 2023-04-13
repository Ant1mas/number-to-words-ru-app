const { i18n } = require('./next-i18next.config')
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
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports =
  process.env.NODE_ENV === 'production' ? withPWA(nextConfig) : nextConfig
