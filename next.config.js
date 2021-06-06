module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: (config, { isServer, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }

    return config;
  },
};