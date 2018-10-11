const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const js = {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
}

const fileLoader = {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: "images/[name].[ext]",
            }
        }
    ]
}

const pug = {
    test: /\.pug$/,
    use: [
        {
            loader: 'html-loader',
            options: {
                attrs: ["img:src"]
            }
        },
        {
            loader: 'pug-html-loader'
        }
    ]
}

const config  = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [js, fileLoader, pug]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'My killer app',
            template: 'src/index.pug'
        })
    ]
}

module.exports = config