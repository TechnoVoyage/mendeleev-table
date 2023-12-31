const WebSocket = require('ws');
const dmxlib = require('dmxnet');
const consts = require('./artnet_const')
const senders = {}
console.log(consts.element_adresses[112])
const wss = new WebSocket.WebSocketServer({ port: 8000 });
var dmxnet = new dmxlib.dmxnet({
  log: { level: 'info' },
  oem: 0,
  esta: 0,
  sName: "Mendeleev",
  lName: "Mendeleev Table",
  hosts: ["127.0.0.1"],
  errFunc: function (err) {
    this.error(`Do some error handling or throw it: ${err.message}, stack: ${err.stack}`);
  }.bind(this)
});
function makeSenders() {
  for (var i = 1; i <= 113; i++) {
    senders[i] = dmxnet.newSender({
      ip: consts.ip_adresses[consts.element_adresses[i][0]],
      subnet: consts.element_adresses[i][1],
      universe: consts.element_adresses[i][2],
      net: 0,
      port: 6454,
      base_refresh_interval: 1000
    });
  }
}
function sendToElement(el_index, iso_index, color) {
  console.log(el_index, iso_index, color)
  // var sender=dmxnet.newSender({
  //     ip: consts.ip_adresses[consts.element_adresses[el_index][0]], 
  //     subnet: consts.element_adresses[el_index][1], 
  //     universe: consts.element_adresses[el_index][2],
  //     net: 0, 
  //     port: 6454, 
  //     base_refresh_interval: 1000 
  //   });
  if (iso_index < 5) {
    var cnt = 0;
    for (var i = iso_index * 28 * 3; i < ((iso_index + 1) * 28)*3; i++) {
      senders[el_index].prepChannel(i, color[cnt % 3]);
      cnt++;
    }
  } else {
    var cnt = 0;
    for (var i = 5*28*3; i < (5*28+30)*3; i++) {
      senders[el_index].prepChannel(i, color[cnt % 3]);
      cnt++;
    }
  }
  senders[el_index].transmit();
}
makeSenders();
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  ws.on('message', function message(msg) {
    console.log(String(msg))
    const data = String(msg).split(" ");
    console.log(data)
    const elem = parseInt(data[0]);
    var iso = parseInt(data[1])
    const rgb = [parseInt(data[2]), parseInt(data[3]), parseInt(data[4])]
    sendToElement(elem, iso, rgb);
  });

  console.log("connect")
});
