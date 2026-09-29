const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          cardapio: `cardapio@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
          pedido: `pedido@http://localhost:3002/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        },
        shared: {},
        extraOptions: { exposePages: false },
      })
    );
    return config;
  },
};