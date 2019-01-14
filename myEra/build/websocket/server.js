const WebSocket = require('ws');
const WebSocketServerCase = new WebSocket.Server({
  host: 'localhost',
  port: 8085
});


WebSocketServerCase.broadcast = function(data) {
  WebSocketServerCase.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};


WebSocketServerCase.on('error', (err) => {
  console.log('WebSocket Server Error', err);
});

WebSocketServerCase.on('listening', () => {
  console.log('WebSocket Server Attached and Listening');
});

WebSocketServerCase.on('connection', (socket) => {
  console.log('WebSocket Client Connected');

  socket.on('error', (err) => {
    if (err.errno !== 'ECONNRESET') {
      console.log('client socket error', JSON.stringify(err));
    }
  });

});

//WebSocketServerCase.close(callback);
module.exports = WebSocketServerCase
