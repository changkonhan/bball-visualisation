const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    PUBLIC: path.resolve(__dirname, 'public'),
    SRC: path.resolve(__dirname, 'src')
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.SRC, 'index.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(paths.PUBLIC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({
            //         use: 'css-loader'
            //     })
            // },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         use: [
            //             {
            //                 loader: 'css-loader'
            //             },
            //             {
            //                 loader: 'sass-loader'
            //                 // options: {
            //                 //     data: '@import "variables";',
            //                 //     includePaths: [path.resolve(paths.SRC, "client/stylesheets")]
            //                 // }
            //             }
            //         ]
            //     })
            // },
            // {
            //     test: /\.less$/,
            //     loader: ExtractTextPlugin.extract({
            //         use: ['css-loader', 'less-loader']
            //     })
            // },
            // {
            //     // fallback is to file-loader when image is greater than 8kb
            //     test: /\.(png|jp(e*)g|gif|svg)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8000,
            //             name: '[name].[hash].[ext]',
            //             outputPath: '/assets/images/'
            //         }
            //     }]
            // },
            // {
            //     test: /\.(ttf|eot|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]',
            //         outputPath: '/assets/fonts/'
            //     }
            // },
            // {
            //     test: /\.json$/,
            //     loader: 'json-loader'
            // }
        ]
    }
    // node: {
    //     net: "empty",
    //     tls: "empty",
    //     fs: "empty"
    // }
};