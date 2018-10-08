const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const scss = {
    test: /\.scss$/,
    use: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader'
        },
        {
            loader: 'sass-loader'
        },
    ]
}

const config = merge(common, {
    mode: 'development',
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [scss]
    }
})

module.exports = config