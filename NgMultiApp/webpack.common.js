
'use strict'
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let path = require('path');
var DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
 

module.exports = {



    plugins: [
   //  new webpack.optimize.OccurrenceOrderPlugin(),
     new DuplicatePackageCheckerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'polyfills', chunks: ['polyfills', 'vendors',], }), // 1
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', chunks: ['vendors','AppOne','AppTwo'],
        }), // 2
     
        new HtmlWebpackPlugin({
            chunks: [
                'polyfills', // 1
                'vendors' // 2

            ],

            filename: __dirname + '/Views/Shared/_Layout.cshtml',
            inject: 'head',
            template: './Views/Shared/_LayoutTemplate.cshtml'
        }),
        new HtmlWebpackPlugin({
            chunks: [

                'AppTwo', // rest
            ],

              filename: __dirname + '/Views/Second/Index.cshtml',
            inject: 'body',
            template: './Views/Second/IndexTemplate.cshtml'
        }),
        new HtmlWebpackPlugin({
            chunks: [

                'AppOne', // rest
            ],

            filename: __dirname + '/Views/Home/Index.cshtml',
            inject: 'body',
            template: './Views/Home/IndexTemplate.cshtml'
        }),
       

   

    ]
}; 