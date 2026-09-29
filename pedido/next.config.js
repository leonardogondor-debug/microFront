// eslint-disable-next-line @typescript-eslint/no-require-imports
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pedido',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Pedido': './src/components/Pedido'
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

