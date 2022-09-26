const path = require('path')
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff2|woff|otf|ttf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(svg|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
        ]
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}