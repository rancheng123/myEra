ws = new WebSocket("ws://"+ "localhost" +":"+ "8081");//本地访问
ws.onopen = function () {
  console.log("ws open");
}
ws.onmessage = function (event) {
  if( JSON.parse(event.data).type == 'compile done' ){
    location.reload()
  }
}
ws.onclose = function () {
  console.log("ws close");
}
ws.onerror = function () {
  console.error("ws error");
}
