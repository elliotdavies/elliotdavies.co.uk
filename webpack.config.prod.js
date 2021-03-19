const baseConfig = require("./webpack.config.base.js");

const path = require("path");

const outputPath = path.join(process.cwd(), "build");

module.exports = {
  ...baseConfig,

  mode: "production",

  entry: "./src/static",

  output: {
    ...baseConfig.output,

    path: outputPath,
  },
};
