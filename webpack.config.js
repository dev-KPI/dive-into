const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//TODO auto 
module.exports = {
  mode: 'development',
  entry: {
    bundle: ['@babel/polyfill', path.resolve(__dirname, "src/index.js")],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '/src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about-us.html',
      template: '/src/project-blocks/page/about-us/about-us.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'members.html',
      template: '/src/project-blocks/page/members/members.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      template: '/src/project-blocks/page/projects/projects.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}