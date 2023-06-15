const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  mode: "development",
  module:  {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './dev.env',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    devMiddleware: {
      stats: "errors-only",
    }
  }
});