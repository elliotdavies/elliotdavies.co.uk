const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");

const path = require("path");

const outputPath = path.join(process.cwd(), "build");

module.exports = {
  ...baseConfig,

  mode: "production",

  output: {
    ...baseConfig.output,

    path: outputPath,
  },

  plugins: [...baseConfig.plugins, new CleanWebpackPlugin()],
};
