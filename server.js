const WebSocket = require('ws');
const  dmxlib=require('dmxnet');
import { element_adresses, ip_adresses } from './const';

const ws = new WebSocket.Server({ port: 8000 });
var dmxnet = new dmxlib.dmxnet({
    log: { level: 'info' }, 
    oem: 0, 
    esta: 0, 
    sName: "Mendeleev", 
    lName: "Mendeleev Table", 
    hosts: ["127.0.0.1"], 
    errFunc: function(err) {
                  this.error(`Do some error handling or throw it: ${err.message}, stack: ${err.stack}`);
              }.bind(this) 
  });
function sendToElement(el_index, iso_index, color) {
    var sender=dmxnet.newSender({
        ip: ip_adresses[element_adresses[el_index][0]], 
        subnet: element_adresses[el_index][1], 
        universe: element_adresses[el_index][2],
        net: 0, 
        port: 6454, 
        base_refresh_interval: 1000 
      });
      if(iso_index < 5) {
        var cnt = 0;
        for(var i = iso_index*28; i < (iso_index+1)*28; i++) {
            sender.prepChannel(i,color[cnt%3]);
            cnt++;
        }
        sender.transmit();
      } else {
        var cnt = 0;
        for(var i = iso_index*30; i < (iso_index+1)*30; i++) {
            sender.prepChannel(i,color[cnt%3]);
            cnt++;
        }
        sender.transmit();
      }
}

ws.on('connection', onConnect);

function onConnect(ws) {
    console.log("connected");
}

ws.on('message', function(message) {
    console.log(message)
        
  })