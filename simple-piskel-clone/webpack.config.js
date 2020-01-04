const path = require('path');
const CssPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfill: '@babel/polyfill',
        main: './src/screens/canvas/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', CssPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options:
                        {
                            name: '[name].[ext]',
                            outputPath: 'assets/img'
                        }
                }]
            },
        ]
    },
    plugins: [
        new HtmlPlugin({
            inject: false,
            template: './src/screens/canvas/index.html',
            filename: 'index.html'
        }),

        new CssPlugin({
            filename: 'style.css'
        })
    ],
    mode: 'development',
    devtool: process.env.NODE_ENV === 'production'
        ? 'hidden-source-map' : 'inline-source-map',
    watchOptions: {
        aggregateTimeout: 600,
        poll: true
    }
};
