module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new webpack.IgnorePlugin(/test/));

    config.node = {
      fs: 'empty',
    };
    return config;
  },
};