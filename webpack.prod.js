const path = require('path');
var glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const indextInput = './index.html';
const indexOutput = 'index.html';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        'components': glob.sync('./src/components/**/**.js'),
        'index': './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/squid-game/',
    },
    resolve: {
        alias: {
            modules: path.resolve(__dirname, './node_modules/')
        },
        modules: [
            path.join(__dirname, './node_modules')
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: indexOutput,
            template: 'index.html'
        })
    ],
    module: {
        rules: [{

                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        fallback: 'file-loader',
                        name: '[name].[ext]',
                        publicPath: 'squid-game/img/',
                        outputPath: 'assets/img/'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};