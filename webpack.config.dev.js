var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3004',
        'webpack/hot/dev-server',
        './app/src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'), //path to where webpack will build your stuff
        filename: 'bundle.js',
        publicPath: '/app/src' // This is used to generate URLs to e.g. images
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /(\.css)$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url?prefix=font/&limit=5000&name=fonts/[name].[ext]"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=fonts/[name].[ext]"},
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"
            },
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]'}
        ]
    }
};