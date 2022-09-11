const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        /*
            Se coloca el hash para forzar a los clientes
            a utilizar the new version of the empaquetado
            en lugar de usar el browser en su memoria.
            Para eso se usa este hash.
        */
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@pictures': path.resolve(__dirname, 'src/assets/pictures/'),
            '@img': path.resolve(__dirname, 'src/assets/img/'),
            '@js': path.resolve(__dirname, 'src/js/'),
        }
    },
    //el module encierra a los loaders
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|ico|svg|jpg|gif|jpeg)$/,
                type: 'asset'
            },
            {
                test: /\.pdf$/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
}