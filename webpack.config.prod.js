const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/static',

  mode: 'production',

  module: {
    rules: [
      { test: /\.js(x)$/,
        use: [
          { loader: require.resolve('babel-loader')
          , options: {
              presets: ['@babel/preset-react']
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  resolve: {
    extensions: ['.jsx','.js']
  }
}
