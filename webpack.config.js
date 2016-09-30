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
	new ExtractTextPlugin("[name]-[hash].css"),
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		"window.jQuery": "jquery"
	}),
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
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: outputFile
	},
	module: {
		loaders: [
			// 为webpack指定loaders
			{
				test: /\.tpl$/,
				loader: 'art-template-loader/index.js',
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				loaders: ['es3ify-loader'],
				query: {
					presets: ['es2015','stage-0'],
					plugins : [
						'transform-runtime',
					]
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
			},
			{
				test: /\.less$/,
				loaders: ['style', 'css?modules!postcss', 'less?modules!postcss'],
				include: path.resolve(__dirname, 'app')
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=25000'
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
				target: 'http://dev1.boxuegu.com:58000/',
				host: 'boxuegu.com'
			}
		}
	}
}

module.exports = {
	loaders: [{
		// 得到jquery模块的绝对路径
		test: require.resolve('jquery'),
		// 将jquery绑定为window.jQuery 和 window.$
		loader: 'expose?jQuery!expose?$'
	}]
};

module.exports = config;