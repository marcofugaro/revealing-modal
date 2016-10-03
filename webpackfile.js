const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');
const package = require('./package');

const banner = `${package.name} ${package.version} - ${package.description}\nCopyright (c) ${ new Date().getFullYear() } ${package.author} - ${package.homepage}\nLicense: ${package.license}`;

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
    context: __dirname,
    entry: [
        `./src/js/${package.name}.js`,
        `./src/sass/${package.name}.scss`,
    ],
    output: {
        path: __dirname + '/dist',
        filename: `${package.name}.min.js`
        // library: package.name,
        // libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract([
                'css', 'postcss', 'sass'
            ])
        }]
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new ExtractTextPlugin(`${package.name}.min.css`),
        new WebpackNotifierPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({ browsers: ['last 2 versions', '> 1%', 'ie 9'] })
                ]
            }
        }),
    ]
};
