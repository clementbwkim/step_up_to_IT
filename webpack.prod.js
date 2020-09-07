const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const phase1 = merge.smartStrategy({plugins: 'prepend'})(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    //cheap-module-source-map
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]',
      // 로컬파일을 보게 한다. for debug
      publicPath: 'http://localhost:9000/',
      lineToLine: true,
    }),
  ]
});

module.exports = merge(phase1, {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: {
            comments: false,
          },
          toplevel: false,
          ie8: false,
          keep_fnames: false,
          safari10: false,
        }
      })
    ]
  }  
});
