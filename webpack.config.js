const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './public/js/main.js',
    output: { path: __dirname + '/public/js/bundle', filename: 'bundle.js' },
    resolve: {
      root: __dirname,
        alias: {
          Main: 'public/components/Main.jsx'
        },
        extensions: ['' , '.js' , 'jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
