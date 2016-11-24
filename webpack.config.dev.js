var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3004',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'), //path to where webpack will build your stuff
        filename: 'bundle.js',
        publicPath: '/' // This is used to generate URLs to e.g. images
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
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]'}
        ]
    }
};