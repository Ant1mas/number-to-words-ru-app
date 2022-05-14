const withPWA = require("next-pwa")

const pwaCaching = require("./pwa-caching")

module.exports = withPWA({
  basePath: '/number-to-words-ru',
  pwa: {
    dest: "public",
    register: true,
    dynamicStartUrl: false,
    runtimeCaching: pwaCaching,
    disable: process.env.NODE_ENV === "development",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
})
