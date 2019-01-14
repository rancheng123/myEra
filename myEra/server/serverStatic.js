module.exports = {
  start: function () {
    this.serverCase = noCacheRequire('/Users/rancheng/work/code/test/myEra/server/serverVar.js')
  },
  close: function(callback){
    this.serverCase.close(function () {
      console.log('关闭服务器')
      callback && callback()
    });
  },
  restart: function(){
    this.close(()=>{
      this.start();
    });

  },


}

