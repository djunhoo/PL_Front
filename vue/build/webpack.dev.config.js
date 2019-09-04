const path = require('path')
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const webpackConfig = merge(baseConfig, {
    mode: 'development',
    devServer: {
        open: true,
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        hot: true,
        https: false,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    output: {
        publicPath: 'http://127.0.0.1:9000/dist/',
        filename: 'build.js',
        path: path.resolve(__dirname, '../dist')
    },
    performance: {
        hints: false
    },
    plugins: [
        new BundleTracker({ filename: './webpack-stats.json' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
});

module.exports = webpackConfig;