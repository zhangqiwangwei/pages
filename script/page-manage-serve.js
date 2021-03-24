const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./pageManage/main.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env","@babel/preset-react"],
                    "plugins": [
                        [
                            "import",
                            {
                                "libraryName": "antd",
                                "style": "css"
                            }
                        ]
                    ]}

            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader",{
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",require('autoprefixer')
                                ]
                            ]
                        }
                    }
                }]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: '[name].min.js'
    },
    devtool:"source-map",
    devServer: {
        contentBase: '../dist',
        port: 8083,
        //publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
        entry: 'index',
        template: './public/index.html',
        filename: 'index.html',
        publicPath: './'
    })]
};