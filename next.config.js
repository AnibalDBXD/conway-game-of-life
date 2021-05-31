const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};