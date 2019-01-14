require('./deg');

const Koa = require('koa');
const app = new Koa();
var Utils = require('./utils')
var ip = Utils.getIp();



app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

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

  //返回页面内容
  ctx.body = 'Hello World';


  //获取请求头
    ctx.get('Origin')
    ctx.get('Access-Control-Request-Method')
    ctx.get('Access-Control-Request-Headers')

  //设置请求头
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.set('Access-Control-Allow-Origin', 'http://172.18.194.216:7070');
    ctx.set('Access-Control-Allow-Methods', 'POST');
    ctx.set('Access-Control-Allow-Headers', 'x-requested-with');
    ctx.set('Access-Control-Max-Age', 60 * 60 * 24 * 365);

});

app.listen(3000,ip, () => {
  console.log(ip + ':3000')
});

