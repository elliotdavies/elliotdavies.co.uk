const baseConfig = require("./webpack.config.base.js");

const path = require("path");

const outputPath = path.join(process.cwd(), "build-dev");

module.exports = {
  ...baseConfig,

  mode: "development",

  entry: "./src/dev",

  output: {
    ...baseConfig.output,

    path: outputPath,
  },

  devServer: {
    port: 8000,
    contentBase: outputPath,
    compress: true,
    hot: true,
  },
};
