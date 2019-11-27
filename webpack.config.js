const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader,'css-loader','postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            
            options: {
              name: 'assets/images/[name].[ext]',
            },
            
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65
          //     },
          //     optipng: {
          //       enabled: false,
          //     },
          //     pngquant: {
          //       quality: [0.65, 0.90],
          //       speed: 4
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //     webp: {
          //       quality: 75
          //     }
          //   }
          // },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          
          options: {
            name: "assets/fonts/[name].[ext]",
          },

          
          
        },
      },
    
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin( ),
    //new ExtractTextPlugin({filename: 'style.[chunkhash].css', disable: false, allChunks: true}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ]
}