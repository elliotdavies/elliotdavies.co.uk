const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.tsx?$/,
        loader: require.resolve("ts-loader"),
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
