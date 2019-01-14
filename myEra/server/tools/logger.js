const log4js = require('log4js');
const os = require('os');
const log4jsConf = {
  appenders: {
    traceDateFile: {
      'type': 'dateFile',
      //目录
      'filename': '/Users/rancheng/work/code/test/myEra/logs' + '/trace/',
      //命名规则，我们是按天，也可以设置为yyyyMMddhh.log，为按时
      'pattern': '.yyyy-MM-dd',
      'absolute': true,
      'alwaysIncludePattern': true,
      layout: {
        type: 'pattern',
        pattern: "%d " + os.hostname() + " " + '' + " [%p] main " + '' + " #XMDT#%m#XMDT#"
      }
    },

    //只记录错误级别日志
    justTrace: {
      type: 'logLevelFilter',
      appender: 'traceDateFile',
      level: 'trace',
      maxLevel: 'trace'
    },

    console: {
      type: 'console'
    }
  },
  categories: {
    default: {
      appenders: ['console', 'justTrace'],
      level: 'trace'
    }
  },
  //pm2: true,
  //pm2InstanceVar: 'INSTANCE_ID'
}

log4js.configure(log4jsConf);

var logCase = log4js.getLogger();

console.log(logCase)
