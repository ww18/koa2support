const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(file){
    return path.resolve(__dirname, file)
}
module.exports = {
    mode: 'development',
    entry:{
        app:resolve('./public/js/xPraise.js')
    },
    output:{
        path:resolve('./dist/'),
        filename:'[name].js?v=[hash]',
        publicPath:'/dist/'
    },
    plugins:[
        //new ExtractTextPlugin('./public/css/index.css'),
        //new ExtractTextPlugin({
        //    filename:'bundle.css?v=[hash]',
        //    allChunks:false,
        //    disable:false,
        //    publicPath:'/dist'
        //}),
        //new CommonsChunkPlugin({
        //    name:['vendor','manifest'],
        //    minChunks: Infinity
        //}),
        new HtmlWebpackPlugin({
            template:resolve('./views/index.template.html'),
            filename:resolve('./views/index.html'),
            inject: false,
            //chunks:['manifest','app','vendor'],
            hash: false
        })
    ],
    //module:{
    //    rules:[
    //        {
    //            test:/\.js$/,
    //            loader:'babel-loader?cacheDirectory',
    //            exclude:/node_modules/,
    //            options:"{presets:[['env', { modules:false }]]}"
    //        },
    //        {
    //            test:/\.css$/,
    //            loader:ExtractTextPlugin.extract({
    //                use:['css-loader?minimize','postcss-loader']
    //            })
    //        }]
    //}
}