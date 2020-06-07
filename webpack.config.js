var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/public/index.html`,
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        writeToDisk: true,
        historyApiFallback: true,
        contentBase: './dist',
        port: 8080
    }
}
