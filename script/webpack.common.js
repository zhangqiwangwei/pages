const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    //`${process.env.NODE_ENV}` !== 'production'? {
                    //    loader: "vue-style-loader",
                    //    options: {
                    //        ssrId:false,
                    //    }
                    //}:{ //vue-style-loader !!!  服务端报错问题
                    //    loader: MiniCssExtractPlugin.loader,
                    //},
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env"
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            cacheGroups: {
                //defaultVendors: {
                //    test: /[\\/]node_modules[\\/]/,
                //    priority: -10
                //},
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 1
                }
            }
        }
    },
    externals: {
        vue: 'Vue',
        jquery: '$',
        bootstrap: 'bootstrap'
    }
};