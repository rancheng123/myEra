var os = require('os');
var Utils = {
  getIp: ()=> {
    var IPv4;
    for(var i=0;i<os.networkInterfaces().en0.length;i++){
      if(os.networkInterfaces().en0[i].family=='IPv4'){
        IPv4=os.networkInterfaces().en0[i].address;
      }
    }
    return IPv4
  }
}
module.exports = Utils

