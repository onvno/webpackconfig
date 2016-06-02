var path = require('path')
var webpack = require('webpack');

// 演示用插件，所有输出最顶部生成注释
var commitHead = new webpack.BannerPlugin('weidong test');

// extract-text-webpack-plugin插件，生成外链的css文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry: {
		enter:'./src/js/entry.js'
	},
	output:{
		path: path.join(__dirname,'src/js'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.css/, 
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
			//{ test: require.resolve("./src/js/file.js"),  loader: "imports?$=jquery"}
		]
	},
	plugins: [
		commitHead,
		new ExtractTextPlugin("../css/[name].bundle.css"),
		new webpack.ProvidePlugin({
		    $: "jquery",
		    jQuery: "jquery",
		    "window.jQuery": "jquery"
		})
	],
	resolve: {
		extensions: ['', '.js', '.json', '.css'],
	}
}