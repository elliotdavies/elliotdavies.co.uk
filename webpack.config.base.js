const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const babelLoader = require.resolve("babel-loader");
const babelOptions = {
  presets: ["@babel/preset-react"],
};

module.exports = {
  entry: "./src/index",

  output: {
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: babelLoader,
        options: babelOptions,
      },
      {
        test: /\.tsx?$/,
        loader: require.resolve("ts-loader"),
        exclude: /node_modules/,
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: babelLoader,
            options: babelOptions,
          },
          require.resolve("@mdx-js/loader"),
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

    new CopyPlugin({
      patterns: [
        { from: ".well-known", to: ".well-known" },
      ],
    })
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
