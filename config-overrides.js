const { ProvidePlugin } = require("webpack");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.fallback = {
    // url: require.resolve("url"),
    // assert: require.resolve("assert"),
    buffer: require.resolve("buffer"),
  };
  config.plugins.push(
    new ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};
