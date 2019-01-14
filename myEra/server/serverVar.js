console.log('KoaServer   1')

const Koa = require('koa');
var Router = require('koa-router');
var path = require('path');
// var current_path = path.resolve(__dirname);
var process = require('process');
var fs = require('fs');
//var degg = require('./tools/debugger');
var degg = noCacheRequire('/Users/rancheng/work/code/test/myEra/server/tools/debugger.js')

var routerMap = noCacheRequire('/Users/rancheng/work/code/test/myEra/server/api/apiRouter.js')






process.on('beforeExit',function(exitCode/*退出码*/){
  console.log('exit')
});

process.on('disconnect',function(exitCode/*退出码*/){
  console.log('exit')
});

process.on('exit',function(exitCode/*退出码*/){
  console.log('exit')
});

process.on('message',function(exitCode/*退出码*/){
  console.log('exit')
});


process.on('multipleResolves',function(exitCode/*退出码*/){
  console.log('exit')
});

process.on('rejectionHandled',function(exitCode/*退出码*/){
  console.log('exit')
});

process.on('uncaughtException',function(exitCode/*退出码*/){
  console.log('uncaughtException')
});

process.on('unhandledRejection',function(exitCode/*退出码*/){
  console.log('unhandledRejection')
});

process.on('warning',function(exitCode/*退出码*/){
  console.log('warning')
});

// 程序终止(interrupt)信号, 在用户键入INTR字符(通常是Ctrl-C)时发出，用于通知前台进程组终止进程
process.on('SIGINT', (sign) => {
  console.log('Received SIGINT.  Press Control-D to exit.');
});






const app = new Koa();
var router = new Router();

// 设置接口权限
// app.use(async (ctx, next) => {
//   if (  ctx.req.url.match(/^\/h5\/api\//) && 1  ) {
//     ctx.response.body = '没有权限';
//   }
//   else{
//     await next()
//   }
// });



// websocket
app.use(async (ctx, next) => {
  if(ctx.req.url.match('_socket_.js')){
    ctx.response.body = fs.readFileSync( rera.config.appRoot + '/build/websocket/client.js');
  }else{
    await next()
  }
});




// 动态接口
app.use(async (ctx, next) => {

  if(!global.ctx){
    global.ctx = ctx
  }

  if(ctx.req.url.match(/^\/h5\/api\//)){
    global.freeSpace.traceApi.nodeApi = ctx.req.url;
    var str = ctx.req.url.replace('/h5/api','');

    var end = str.lastIndexOf('/');
    var path = str.substring(0,end);

    var method = str.substring(end+1);

    var qianjiaApi = require('./api/modules/'+ routerMap[path]);
    var result = await qianjiaApi[method]();
    ctx.response.body = result;
  }else{
    await next()
  }
});






var isStudy = false
if(isStudy){


  // 实现 前端代码热部署  start
  const KoaWebpack = require('koa-webpack');
  const webpackMiddleware = KoaWebpack({
    compiler: compiler,
    dev: {
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
    },
    hot: {
      // for https://github.com/webpack-contrib/webpack-hot-client#options
      logLevel: 'silent'
    }
  })
  app.use(webpackMiddleware);


// 实现 前端代码热部署  end
}else{



  // 静态资源
  app.use(async (context, next) => {
    devMiddlewareCase(context.req, {
      end: (content) => {
        context.body = content; // eslint-disable-line no-param-reassign
      },
      setHeader: context.set.bind(context),
      locals: context.state
    }, () => {
      return next()
    });
  });

  //dev中间件 关闭时
  devMiddlewareCase.close(() => {
    console.log('webpack-dev-middleware   closed')
    //client.close(callback);
  });






  if(0){
    // 静态资源
    app.use(async (ctx, next) => {
      if (ctx.req.url == '/') {
        responseIndexPage(ctx);
      }
      else if(ctx.req.url.match(/\.(js|css|html|gif|jpg|jpeg|png|bmp|ico|txt|swf)/)){

        var path = rera.config.rootDir + ctx.req.url.split('?')[0]

        if(ctx.req.url.match(/\.(css)/)){
          ctx.response.type = 'text/css';
          ctx.response.body = fs.readFileSync(path) + '';
        }else if(ctx.req.url.match(/\.(png)/)) {
          //ctx.response.type = 'image/png';
          ctx.response.body = fs.readFileSync(path);
        }else if(  ctx.req.url.match(/\.(js)/)){
          //ctx.response.type = 'text/css';
          ctx.response.body = fs.readFileSync(path);
        }
        else{
          ctx.response.body = fs.readFileSync(path);
        }
      }
      else{
        responseIndexPage(ctx)
      }
    });
  }


}




app.use(router.routes()).use(router.allowedMethods());

degg(app);

var serverCase = app.listen(rera.config.port,rera.config.host,function () {
  console.log('server is running at '+ rera.config.host + ':'+ rera.config.port)
});

hotUpdate();




//服务端热跟新
function hotUpdate () {
  var watchDir = rera.config.appRoot + '/server/api/modules/';
  var fs = require('fs');
  fs.watch(watchDir, (eventType, filename) => {
    if (filename.indexOf('___jb_tmp___') != -1) {
      noCacheRequire(require.resolve(watchDir + filename.replace('___jb_tmp___','')))
      console.log('koa服务器 '+ filename +' 热更新完成')
    }
  });
}








function responseIndexPage(ctx){

  //  debugger
  var path = rera.config.rootDir + '/index.html'

  ctx.response.type = 'text/html';
  ctx.response.body = fs.readFileSync(path) + '';
}






module.exports = serverCase






