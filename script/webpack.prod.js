const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const MagentoPlugin = require('../plugin/MagentoPlugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
    mode: "production",
    entry: './entry-client.js',
    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name].css'
        }),
        //new MagentoPlugin({
        //    filePath:path.resolve(__dirname, '../dist'),
        //    fileName:"test.html",
        //    additionalCode: ""
        //})
    ]
});