const WebSocket = require('ws');

var nodes = [
    require("artnet")({ host: "2.36.176.140" }),
    require("artnet")({ host: "2.121.14.3" }),
    require("artnet")({ host: "2.142.165.90" }),
    require("artnet")({ host: "2.24.14.207" })
]
const ws = new WebSocket.Server({ port: 8000 });

function sendToElement(el_index, iso_index, color) {
    const node_number = Math.floor(el_index / 32);
    const channel_number = Math.floor((el_index %32) / 4 );
    const universe_number = (el_index %32) % 4;
    if(iso_index != 6) {
        var colors = Array(28*3);
        for(var i = 0; i < 28*3; i++) {
            colors[i] = color[i%3];
        }
        nodes[node_number].set([[universe_number], 28*(iso_index-1)], colors)
    } else {
        var colors = Array(30*3);
        for(var i = 0; i < 30*3; i++) {
            colors[i] = color[i%3];
        }
        nodes[node_number].set([[universe_number], 30*(iso_index-1)], colors)
    }
}

ws.on('connection', onConnect);

function onConnect(ws) {
    console.log("connected");
}

ws.on('message', function(message) {
    console.log(message)
        
  })