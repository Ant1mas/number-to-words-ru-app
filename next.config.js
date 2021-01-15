const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  assetPrefix: isProduction ? 'https://cdn.statically.io/gh/ant1mas/ant1mas.github.io/master/number-to-words-ru/' : '',
};
