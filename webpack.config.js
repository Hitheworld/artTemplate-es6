var webpack = require('webpack');
var path = require('path');                 //引入node的path库
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//开发与真实环境分开
var env = process.env.WEBPACK_ENV;
var outputFile;
var plugins = [
	new HtmlwebpackPlugin({
		title: 'React Biolerplate by Linghucong',
		template: path.resolve(__dirname, 'templates/index.ejs'),
		inject: 'body'
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin(),
	//new ExtractTextPlugin("[name]-[hash].css"),
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		"window.jQuery": "jquery"
	}),
	new webpack.HotModuleReplacementPlugin(),   //全局开启代码热替换
];
if (env === 'build') {
	var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
	plugins.push(new UglifyJsPlugin({ minimize: true }));
	outputFile = 'bundle.min.js';
} else {
	outputFile = 'bundle.js';
}


var config = {
	entry: [
		'eventsource-polyfill', //兼容ie
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:3000',
		'./app/index.js'      //入口文件
	],                //入口文件
	resolve: {
		alias: {},
		extensions: ['', '.less', '.css', '.js', '.json']
	},
	clearBeforeBuild: true,  //清除之前构建的旧文件，以便重新构建
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: outputFile
	},
	module: {
		loaders: [
			// 为webpack指定loaders
			{
				test: /\.(tpl|html|html)$/,
				loader: 'art-template-loader/index.js',
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					plugins : [
						'transform-runtime','babel-plugin-transform-decorators-legacy'
					],
					presets: ['es2015','stage-0'],
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css!autoprefixer' // Run both loaders
			},
			{
				test: /\.less$/,
				loader: 'style!css!autoprefixer!less',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loaders: ['url?limit=25000']
			},
			{
				test: /\.eot/,
				loader : 'file?prefix=font/'
			},
			{
				test: /\.woff/,
				loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf/,
				loader : 'file?prefix=font/'
			},
			{
				test: /\.svg/,
				loader : 'file?prefix=font/'
			}
		]
	},
	node: {
		fs: "empty" // avoids error messages
	},
	postcss: [
		require('autoprefixer')//调用autoprefixer插件
	],
	plugins: plugins,
	devServer: {
		proxy: {
			'/dual-student/*': {
				changeOrigin: true,
				target: 'http://127.0.0.1:3000/',
				host: 'boxuegu.com'
			}
		}
	}
}

module.exports = config;