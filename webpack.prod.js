const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')

const scss = {
    test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
    })
}

const config = merge(common, {
    mode: 'production',
    module: {
        rules: [scss]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
})

module.exports = config