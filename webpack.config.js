const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = () => {
	if (process.env.NODE_ENV === 'development') {
		return { mode: 'development' };
	}

	if (process.env.NODE_ENV === 'production') {
		return { mode: 'production' };
	}

	return {};
};

const devServer = () => {
	if (process.env.NODE_ENV === 'development') {
		return {
			devServer: {
				static: './dist',
				open: false,
			},
		};
	}

	return {};
};

module.exports = {
	...mode(),
	...devServer(),
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			title: 'title',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: './styles.css',
		}),
	],

	entry: './src/index.js',

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},

			/*		{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			}, */
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [],
					},
				},
			},
		],
	},
};
