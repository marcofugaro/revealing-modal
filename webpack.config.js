const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const package = require('./package');

const banner = `${package.name} ${package.version} - ${package.description}\nCopyright (c) ${ new Date().getFullYear() } ${package.author} - ${package.homepage}\nLicense: ${package.license}`;


module.exports = {
    // context: __dirname + '/src',
    entry: [
        __dirname + `/src/js/${package.name}.js`,
        __dirname + `/src/sass/${package.name}.scss`
    ],
    output: {
        path: __dirname + '/dist',
        filename: '[name].min.js'
        // library: `inView`,
        // libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract([
                'css', 'sass'
            ])
        }]
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new ExtractTextPlugin('[name].min.css')
    ]
};
