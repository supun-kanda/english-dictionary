const
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    readFileSync = require('fs').readFileSync,
    externalConfigurationsPath = 'configs/configurations.json',
    rawConfigs = JSON.parse(readFileSync(externalConfigurationsPath)),
    PORT = rawConfigs.PORT;

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
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
            template: `${__dirname}/src/index.html`,
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        writeToDisk: true,
        historyApiFallback: true,
        contentBase: './dist',
        port: PORT
    }
}
