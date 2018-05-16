/**
 * Created by ww on 2018/5/7.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const WebpackChunkHash = require("webpack-chunk-hash");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

function resolve(file){
    return path.resolve(__dirname, file)
}

module.exports = {
    entry:{
        app:resolve('../public/js/app.js')
    },
    output:{
        path:resolve('../dist/'),
        filename:'[name].js?v=[hash]',
        publicPath:'/dist/'
    },
    plugins:[
        //new ExtractTextPlugin('./public/css/index.css'),
        new ExtractTextPlugin({
            filename:'bundle.css?v=[hash]',
            allChunks:false,
            disable:false,
            publicPath:'/dist'
        }),
        new CommonsChunkPlugin({
            name:['manifest'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template:resolve('../views/index.template.html'),
            filename:resolve('../views/index.html'),
            inject: false,
            chunks:['manifest','app'],
            hash: false
        }),
        new UglifyJsPlugin({
            sourceMap: false,
            compress:{
                warnings:false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"prod"'
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader?cacheDirectory',
                exclude:/node_modules/,
                options:"{presets:[['env', { modules:false }]]}"
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    use:['css-loader?minimize']
                })
            }]
    }
}