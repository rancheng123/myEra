require('./config');

// 清理缓存方法
function noCacheRequire(modulePath) {
  var module = require.cache[modulePath];
  if(module){
    // remove reference in module.parent
    if (module.parent) {
      module.parent.children.splice(module.parent.children.indexOf(module), 1);    //释放老模块的资源
    }
  }

  require.cache[modulePath] = null;    //缓存置空
  return require(modulePath);
}
global.noCacheRequire = noCacheRequire

var buildObj = require('./build/build')
var serverObj = require('./server/serverStatic')

global.serverObj = serverObj

buildObj.build(function () {})
serverObj.start()



