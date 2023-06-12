const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  resolve: {
    extensions: [".js",".ts", ".tsx"],
  },
  entry: {
    app: ["./index.tsx"],
  },
  output: {
    filename: '[name].[chunkhash].js',
    clean: true, 
  },
  module:  {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      template: "./index.html", 
      scriptLoading:'blocking', 
      }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8081,
    devMiddleware: {
      stats: "errors-only",
    },
  },

};