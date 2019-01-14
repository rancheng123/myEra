const webpack = require("webpack");
const config = require('./webpack.config');
const compiler = webpack(config);
global.compiler = compiler

// 引入  websocket   start
var WebSocketServerCase = require('./websocket/server');


compiler.plugin('compile', () => {
  console.log('webpack:    compile')
});

compiler.plugin('invalid', () => {
  console.log('webpack:    invalid')

});

compiler.plugin('done', (result) => {
  console.log('webpack:    done')

  //编译完成，通知客户端 刷新页面
  WebSocketServerCase.broadcast(JSON.stringify({
    type: 'compile done'
  }))
});




// 利用webpack-dev-middleware 将编译结果 做成缓存（放在内存中，而不是生成文件）
const devMiddleware = require('webpack-dev-middleware');
const devMiddlewareCase = devMiddleware(compiler, {
  disableHostCheck: true,
  compress: true,
  clientLogLevel: 'none',
  quiet: true,
  // for ^2.x
  logLevel: 'silent',
  watchOptions: {
    ignored: /node_modules/
  },
  publicPath: 'http://'+ rera.config.host +':'+ rera.config.port +'/'
});
global.devMiddlewareCase =devMiddlewareCase;


module.exports = {
    build: function (callback) {
      console.log(' webpack --编译开始')


      // 自动编译
      const watching = compiler.watch({
        // watchOptions 示例
        aggregateTimeout: 300,
        poll: undefined
      }, (err, stats) => {
        if (err) {
          console.error(err.stack || err);
          if (err.details) {
            console.error(err.details);
          }
          return;
        }

        console.log(stats.toString({
          // ...
          // Add console colors
          chunks: false,
          colors: true
        }))

        console.log(' webpack --编译结束')

        callback && callback()


        setTimeout(function () {
          if(!global.enableApp){
            global.enableApp = true;
            var file = '/Users/rancheng/work/code/test/myEra/frontEnd/qianjia/src/js/enable.js'
            fs.readFile(file,'utf-8',function(error,data){
              if(error){
                console.log(error)
                return;
              };
              // 修复bug
              fs.writeFile(file, Date.now(),'utf-8',function(error){
                if(error){
                  console.log(error)
                  return;
                };
              })
            });
          }
        },1000)


      });






    }
}


// compiler.run((err, stats) => {
//   if (err) {
//     console.error(err.stack || err);
//     if (err.details) {
//       console.error(err.details);
//     }
//     return;
//   }
//
//   // console.log(stats.toString({
//   //   // ...
//   //   // Add console colors
//   //   chunks: false,
//   //   colors: true
//   // }))
//
//   console.log(' webpack --编译结束')
//
//   callback && callback()
// });
