
'use strict'
var HtmlWebpackPlugin = require('html-webpack-plugin');
let MinifyPlugin = require("babel-minify-webpack-plugin"); 
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
        'AppOne': './Scripts/ngStarters/aot/AppOne.ts',
        'AppTwo': './Scripts/ngStarters/aot/AppTwo.ts',

         

    },
        
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
        // alias: {
        //'@angular/material': '@angular/material/bundles/material.umd.js',
        //  },
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader?configFileName=tsconfig-aot.json',
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
        filename: '[name].live.[hash].js',
        chunkFilename: '[id].live.[hash].chunk.js',
        publicPath: '/Scripts/Build'
    },

    devServer: {
        historyApiFallback: true,
        contentBase: __dirname + '/Scripts/Build',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
     plugins: [
       //new MinifyPlugin({ mangle: false}, {comments: false})
      // new webpack.optimize.UglifyJsPlugin({
      //       parallel: true,
      //       comments:false

      //})
     ]



});