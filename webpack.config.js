var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry : './app.js',
    target : 'node',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    module:{
        rules : [
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('bundle.js'),
    ]
};