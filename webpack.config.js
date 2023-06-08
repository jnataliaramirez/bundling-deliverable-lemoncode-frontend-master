const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    filename: '[name].[chunkhash].js',
    clean: true, 
  },
  module:  {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      template: "./src/index.html", 
      scriptLoading:'blocking', 
      }),
  ],
  devServer: {
    port: 8081,
  },
};