global.freeSpace = {
  traceApi: {
    nodeApi: '',
    javaApi: ''
  }
}

const chalk = require('chalk');
global.require = require


let moment = require('moment')
global.moment = moment;

var fs = require('fs');
global.fs = fs;

var path = require('path');
global.path = path;

// var config = require('./config')
// global.config = config;

var http = require('http');
var querystring = require('querystring');
var url = require('url');


let axios = require('axios')


function fetchData (options) {
  var promiseCase = axios(options)

  promiseCase.nodeApi = global.freeSpace.traceApi.nodeApi

  promiseCase.then((result)=>{
    console.log('[http   '
        + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')   +'   '

        + chalk.green( options.method   +'   '
        + result.status +'   '
        + result.statusText +'    '
        + 'http://' + ctx.req.headers.host + promiseCase.nodeApi +'  '
        + options.url) +'         '

        + ctx.req.headers['user-agent'] +'          '


        + JSON.stringify(result.data)
    +'  ]')



    //  [2018-12-06 14:47:13.086] [INFO] access - 127.0.0.1 - - "OPTIONS /api/upload/uploadPic HTTP/1.1" 200 - "" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36"
  })

  return promiseCase
}
global.fetchData = fetchData;



// async function fetchData (options) {
//   var promiseCase = await axios(options)
//
//   promiseCase.aa = global.freeSpace.traceApi.nodeApi
//
//   var mointorRequest = {
//     url: options.url,
//     headers: options.headers,
//     method: options.method,
//     data: options.data
//   }
//   var mointorResponse = {
//     status: promiseCase.status,
//     statusText: promiseCase.statusText,
//     data: promiseCase.data
//   }
//
//
//   console.log('[http   '+ chalk.green(mointorRequest.method +'   '+ promiseCase.status +'   '+ promiseCase.statusText +'    '+ promiseCase.aa +'  '+ mointorRequest.url) +'  '+ JSON.stringify(promiseCase.data) +'  ]')
//
//   return promiseCase
// }
// global.fetchData = fetchData;






module.exports = function (app) {

  app.use(async (ctx, next) => {
    global.ctx = ctx;

    await next();
  });
}


/*

fetchData({
  url: 'http://zcm-merchant.zc.test.sankuai.com'+ '/manage/merchant/buffet/statusQuery',
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'userId': '',
    'cookie': 'csrfToken=gYnRkbhJ8g_hXzX6jxFH14gd; bizlogintoken=111134932; ssoToken=D+IlzNX+QlrZ4XT2pQtPXslMqwk='
  },
  data: {"deviceSn":"83826300","extra":"empty","source":3,"sourceType":"ecom","shopId":"2563108"}
}).then(function (data) {
debugger
    console.log(JSON.stringify(data.data ))
}).catch(function (error) {
debugger
  console.log(error.stack)
})


*/



