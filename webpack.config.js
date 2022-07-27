const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { JavascriptModulesPlugin } = require('webpack');

//TODO auto 
module.exports = {
	mode: 'development',
	entry: {
		bundle: ['@babel/polyfill', path.resolve(__dirname, "src/index.js")],
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: "[name].js",
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
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /.(svg|png|jpg|gif)$/,
				type: "asset/resource",
				generator: {
					filename: "assets/img/[name][ext]",
				},
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
			template: 'D:/Прочее/web/2022/other/iatp-dev-website-frontend/src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'about-us.html',
			template: 'D:/Прочее/web/2022/other/iatp-dev-website-frontend/src/project-blocks/page/about-us/about-us.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'members.html',
			template: 'D:/Прочее/web/2022/other/iatp-dev-website-frontend/src/project-blocks/page/members/members.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'projects.html',
			template: 'D:/Прочее/web/2022/other/iatp-dev-website-frontend/src/project-blocks/page/projects/projects.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	]
}