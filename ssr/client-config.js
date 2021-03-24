const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const baseConfig = require('./../script/webpack.common.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MagentoPlugin = require('../plugin/MagentoPlugin');
const resolve = (file) => path.resolve(__dirname, file);
module.exports = merge(baseConfig, {
    mode:`${process.env.NODE_ENV}`,
    entry: {
        app:resolve('./entry-client.js')
    },
    output: {
        path: resolve('./dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new VueSSRClientPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new MagentoPlugin({
            filePath:path.resolve(__dirname, '../dist'),
            fileName:"test.html",
            additionalCode: ""
        })
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                //defaultVendors: {
                //    test: /[\\/]node_modules[\\/]/,
                //    priority: -10
                //},
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'commons',
                    chunks: 'initial'
                    //minChunks: 2
                }
            }
        }
    }
});