'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractLess = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './js/app',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        extractLess
    ]
};