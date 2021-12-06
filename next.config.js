const { i18n } = require('./next-i18next.config')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
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
  // assetPrefix: '',
  i18n
}
