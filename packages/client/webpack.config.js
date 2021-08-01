const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

let config = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        index: './src/index.ts'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(m?)js/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        // alias: {
        //     "@project/common": path.resolve(__dirname, "../common/src")
        // }
        plugins: [
            new TSConfigPathsPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Project Client'
        })
    ]
};

module.exports = config;
