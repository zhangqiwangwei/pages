const { merge } = require('webpack-merge');
const common = require('../../script/webpack.common.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const loadSiteStylePlugin = require('../../plugin/loadSiteStyle');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode: "development",
    entry:  './pwa/entry-client.js',
    plugins:[
        new HtmlWebpackPlugin({
            entry: 'index',
            template: './public/template.html',
            filename: 'index.html',
            publicPath: './'
        }),
        new loadSiteStylePlugin("https://www.shesaidyes.com/"),
        new VueLoaderPlugin()
    ],
    devtool:"source-map",
    devServer: {
        contentBase: '../dist',
        compress: true,
        port: 9000,
        proxy: {
            "/api": {
                target: "https://www.shesaidyes.com",
                secure: false
            }
        }
    }
});