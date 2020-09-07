const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require('path');
const distDir = path.resolve(__dirname, 'app/dist');
const srcDir = path.resolve(__dirname, 'app/src');

module.exports = {
  entry: { 
    index: [
      path.resolve(srcDir, 'js/index.js'), 
      path.resolve(srcDir, 'scss/index.scss')
    ],
    about: [
      path.resolve(srcDir, 'js/about.js'), 
      path.resolve(srcDir, 'scss/about.scss')
    ]
  },
  output: {
    path: distDir,
    filename: 'js/[name].[hash].js'
  },
  watch: true,
  module: {
    rules: [
      { parser: { system: false } },
      {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }            
          },
          exclude: /node_modules/
      },
      { 
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", {
          loader: 'postcss-loader',
          // options: {
          //   plugins: () => [require('autoprefixer')({
          //     'browsers': ['> 1%', 'last 2 versions']
          //   })],
          // }
        }]
      },
      { 
        test: /\.html$/, 
        loader: 'html-loader',
        options: {
          interpolate: true,
        }
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 10000
            },            
          }
        ]
      }
    ]
  },
  plugins: [    
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(srcDir, 'index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(srcDir, 'about.html'),
      filename: 'about.html',
      chunks: ['about'],
    }),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "scss/[name].[chunkhash].css",
    }),
  ],
  resolve: {
    modules: ['node_modules', srcDir],
    alias: {
      '~scss': path.resolve(__dirname, 'app/src/scss/')
    },
    extensions: [".wasm", ".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", '.scss', '.css']
  }  
};