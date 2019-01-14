const Koa = require('koa');
const app = new Koa();



app.use(async (ctx, next) => {

  const start = Date.now();
  //响应前
  await next();
  //响应后
  const end = Date.now();

  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${end - start}`);


  // 种植cookie
  ctx.cookies.set('username1111', 'caisujia', {
    //domain: 'localhost',
    //path: '/h5/merchant/afterSaleManagement',
    maxAge: 1000 * 60 * 60 * 1,
    expires: new Date('2018-07-06'),
    httpOnly: false,
    overwrite: false
  });

  var data = require('./data')

  //返回页面内容
  ctx.body = data.a;
});


// 清理缓存方法
function cleanCache(modulePath) {
  var module = require.cache[modulePath];
  // remove reference in module.parent
  if (module.parent) {
    module.parent.children.splice(module.parent.children.indexOf(module), 1);    //释放老模块的资源
  }
  require.cache[modulePath] = null;    //缓存置空

  require(modulePath);
}
global.cleanCache = cleanCache;
global.require = require;

//




app.listen(3000,'localhost',function () {
  console.log('localhost:3000')
});

// var path = require('path');
// var current_path = path.resolve(__dirname);
// var file = current_path + 'data.js'


var fs = require('fs');
fs.watchFile('/Users/rancheng/work/code/test/koaProgram/', {}, function(curr, prev) {
  cleanCache(require.resolve('./data'))
  console.log('koa服务器  热更新完成')
})
