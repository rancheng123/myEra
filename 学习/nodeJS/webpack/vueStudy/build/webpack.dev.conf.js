'use strict'



//目录结构
var dir={
    js: './js/',
    css: './style/',
    images: './images/'
};

var path = require('path');





//开发或生产环境
var isOnline = (process.env.NODE_ENV.trim() == 'production');
//APP
var app = process.env.APP_ENV;

if(process.env.NODE_SOURCEMAP){
    var isNoSourceMap = (process.env.NODE_SOURCEMAP.trim() == 'noSourceMap');
}else{
    var isNoSourceMap = false;
}



var config = require('./config/'+ process.env.APP_ENV.trim() +'_config');
var src_path = config.src_path;
var dist_path = config.dist_path;




//--------------------------------------------------------------------




/*webpack插件 start*/
var webpack = require('webpack');


//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    //filename: 'apps/vendors.js',
    filename: isOnline ? dir.js+'vendors.[chunkhash:5].js' : dir.js+'vendors.js'

});





var HtmlWebpackPlugin= require('html-webpack-plugin');
var px2rem = require('postcss-px2rem');
var browserslist = require('browserslist');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
/*webpack插件 end*/



var indexHtml = new HtmlWebpackPlugin({
    template: path.resolve(src_path,'index.html'),
    hash: true
});




const cssLoaders = [
    /*{
     loader: 'style-loader'
     },*/
    {
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    },
    //注意事项：
    //postcss-loader需要放在style-loader,css-loader之前 ，sass-loader之后
    {
        loader: 'postcss-loader',
        options: {
            plugins: [
                //require('postcss-smart-import')({ /* ...options */ }),
                //require('precss')({ /* ...options */ }),
                require('autoprefixer')({
                    browsers: browserslist('> 1%')
                }),
                require('postcss-px2rem')({
                    remUnit: 100
                })
            ]
        }
    }
];
const sassLoaders = cssLoaders.concat([
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true
        }
    }
])




const devWebpackConfig = {
  entry: {
    index: path.resolve(src_path,'js/index.js'),
    vendors: [
        'vue'
    ],
  },
  output: {
      path: dist_path,
      filename: isOnline ? dir.js+'[name].[chunkhash:5].js' : dir.js+'[name].js'  ,
      chunkFilename: isOnline ? dir.js+'modules/[name].[chunkhash:5].chunk.js' : dir.js+'modules/[name].chunk.js' ,
      publicPath: isOnline ? '' : 'http://localhost:'+ config.port +'/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract({
                use: cssLoaders
            }),
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                use: sassLoaders
            }),
        },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
          test: /\.(jpeg|jpg|png|gif)$/,
          loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'

          //html中使用  <img src={require("./ran.jpg")} alt="22222222"/>

      },
        {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        },

    ]
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8083
  },
  plugins: [
      commonsPlugin,
      indexHtml,

      new ExtractTextPlugin({
          //filename: isOnline ? dir.css+'styles[contenthash].css' : dir.css+'styles.css'  ,
          filename: isOnline ? 'styles[contenthash].css' : 'styles.css'  ,
          allChunks: true
      }),
  ]
}

module.exports = devWebpackConfig
