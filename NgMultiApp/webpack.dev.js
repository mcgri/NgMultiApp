'use strict'
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = webpackMerge(commonConfig, {
  devtool: 'eval',
        entry: {
        'vendors': './Scripts/vendor.ts',
        'polyfills': './Scripts/polyfills.ts',
        'AppOne': './Scripts/ngStarters/jit/AppOne.ts',
        'AppTwo': './Scripts/ngStarters/jit/AppTwo.ts',

         

    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular-router-loader',
                    'angular2-template-loader',
                    'source-map-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name].[ext]',
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            }
        ]
    },


  output: {
      path: __dirname + '/Scripts/Build',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js',
        publicPath: '/Scripts/Build'
  },
 
    devServer: {
        historyApiFallback: true,
        contentBase: __dirname + '/Scripts/Build',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }


});