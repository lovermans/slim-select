const path = require('path')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin")
// const UglifyJsPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle2.js',
    path: path.resolve(__dirname, 'dist'),
  }
}