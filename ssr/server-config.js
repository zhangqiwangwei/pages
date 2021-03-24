const {merge} = require('webpack-merge')
//const nodeExternals = require('webpack-node-externals')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const baseConfig = require('./../script/webpack.common.js')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const resolve = (file) => path.resolve(__dirname, file);
module.exports = merge(baseConfig, {
    // 将 entry 指向应用程序的 server entry 文件
    mode:`${process.env.NODE_ENV}`,
    entry: {
        main:resolve('./entry-server.js')
    },
    target: 'node',
    // 对 bundle renderer 提供 source map 支持
    devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, './dist')
    },
    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，
    // 并生成较小的 bundle 文件。
    externals: nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        allowlist: /\.css$/
    }),
    plugins: [
        new VueLoaderPlugin(),
        new VueSSRServerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});