const {merge} = require('webpack-merge');
const common = require('../../script/webpack.common.js');
const MagentoPlugin = require('../../plugin/MagentoPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
    mode: "production",
    entry: './pwa/entry-client.js',
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            entry: 'index',
            template: './public/template.html',
            filename: 'index.html',
            publicPath: './'
        }),
        new VueLoaderPlugin(),
        new MagentoPlugin({
            filePath: path.resolve(__dirname, '../dist'),
            fileName: "magento.html",
            //additionalCode: ["require(['https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12/vue.runtime.min.js'],function(Vue){", "})"],
            magentoEl: "customFormPage",
            siteUrl: "https://www.shesaidyes.com",
            ssr: false
        })
    ]
});