var process = require('process');

var config = {
  host: 'localhost',
  port: 8388,
  appRoot: process.cwd(),
  rootDir: process.cwd() + '/frontEnd/qianjia/dist',
}

global.rera = {
  config: config
}


