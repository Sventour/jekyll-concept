const Iris = require('iris');
const path = require('path');
var iris = Iris.paths;


const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('myStyle.css');

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: './webpack/entry.js',
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    path: path.resolve(__dirname,'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },

  module: {
  rules: [
    {
      test: /\.jsx$|\.js$/,
      use:[{
		  loader: 'babel-loader', // ‘babel-loader’ is also a legal name to reference
		  options: {
			presets: ['react', 'es2015']
		  }
      }],
    },
    {
      test: /\.scss$|\.css$/,
      // loader: extractCSS.extract('style-loader',[
//       		'css-loader?importLoaders=2&modules=true&sourceMap=true',
//       		'postcss-loader?postcss=require(\'autoprefixer\')','sass-loader']),
      
       use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                	importLoaders:1,
                	modules:true,
                	sourceMap:true
                }
            }, 
            {
            	loader: "postcss-loader",
            	options: {
					postcss: [
						require('autoprefixer'),
					  ],
				  }
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            }]
    },
    {
		test: /\.svg/,
		loader: 'svg-react'
	}
    ]
  },
  resolve: {
  	alias: Object.assign({}, Iris.paths),
  	extensions: [".js", ".jsx",".scss"]
  },
  plugins: [
//   	extractCSS
  ]
};
