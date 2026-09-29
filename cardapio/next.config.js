// eslint-disable-next-line @typescript-eslint/no-require-imports
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'cardapio',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Cardapio': './src/components/Cardapio'
        },
        shared: {},
        extraOptions: {
          exposePages: false,
          ssr: false
        }
      })
    );
    return config;
  }
};

