const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    entry:  './entry-client.js',
    plugins:[],
    devServer: {
        contentBase: '../dist',
        compress: true,
        port: 9000
    }
});