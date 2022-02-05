const withPWA = require("next-pwa")

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  assetPrefix: isProduction
    ? 'https://cdn.jsdelivr.net/gh/ant1mas/ant1mas.github.io/number-to-words-ru/'
    : '',
  // Для проверки production версии на локальном сервере раскомментировать строку одну ниже.
  // assetPrefix: '/number-to-words-ru',
}
