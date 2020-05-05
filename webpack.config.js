const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/about.js',
        statistic: './src/statistic.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
  //   output: {
  //     path: path.resolve(__dirname, 'about'),
  //     filename: 'about.[chunkhash].js',
  // },
//   output: {
//     path: path.resolve(__dirname, 'statistic'),
//     filename: 'statistic.[chunkhash].js',
// },
    module: {
        rules: [ // тут описываются правила
          
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: {
                    loader: "babel-loader"
                }, // весь JS обрабатывается пакетом babel-loader
                exclude: /node_modules/ // исключает папку node_modules
            },
            {
                test: /\.css$/, // применять это правило только к CSS-файлам
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // к этим файлам нужно применить пакеты, которые мы уже установили
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ['file-loader?name=./vendor/[name].[ext]',
                  // {
                  //   loader: 'file-loader'
                  // },
                ]
              },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader?name=./images/[name].[ext]',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
      //new ExtractTextPlugin("styles.css"),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            // Означает, что:
            inject: false, // стили НЕ нужно прописывать внутри тегов
            template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'index.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
        }),
        new HtmlWebpackPlugin({
          // Означает, что:
          inject: false, // стили НЕ нужно прописывать внутри тегов
          template: './src/about.html', // откуда брать образец для сравнения с текущим видом проекта
          filename: 'about.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
      }),
      new HtmlWebpackPlugin({
        // Означает, что:
        inject: false, // стили НЕ нужно прописывать внутри тегов
        template: './src/statistic.html', // откуда брать образец для сравнения с текущим видом проекта
        filename: 'statistic.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
        new WebpackMd5Hash()

    ]
}