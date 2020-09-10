const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const distDir = path.resolve(__dirname, 'app/dist');

const phase1 = merge.smartStrategy({plugins: 'prepend'})(common, {
  mode: 'development',
  devServer: {
    contentBase: distDir,
    // inline: true,
    // hot: true,
    host: "localhost",
    compress: true,
    port: 9000
  },
  plugins: [
    //source-map
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]',
    }),
  ]
});

module.exports = merge(phase1, {
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'scss/[name].css'
    // }),
  ]
});
