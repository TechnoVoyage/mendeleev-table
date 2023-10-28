


id_chosen = -1;
element_width = 60;
interval_between_elements = 10;
element_position = {}
serial_chosen = -1;
q_chosen = -1;
var clicked = false
var tableWebSocket = new WebSocket("ws://127.0.0.1:8000")
active = false

function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function table_show(s){
  arr = s.split(' ')
  serial = parseInt(arr[0])
  q = parseInt(arr[1])
  r = parseInt(arr[2])
  g = parseInt(arr[3])
  b = parseInt(arr[4])
  if (r == 0 && g == 0 && b == 0) {
    c = 20 + (q - 1) / 5 * 50
    document.getElementById(`mini-element-${serial}-${q}`).style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
  } else{
    document.getElementById(`mini-element-${serial}-${q}`).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

const sleep = ms => new Promise(r111 => setTimeout(r111, ms));
animations = [
  async function (){
    colors = [[255, 0, 0], [255, 136, 0], [0, 255, 0], [0, 255, 217], [0, 0, 255], [255, 0, 234]];
    for (var i = 0; i < 6; ++i){
      r = 0;
      g = 0;
      b = 0;
      color = colors[i]
      iter = 50
      deltar = parseFloat(color[0]) / iter
      deltag = parseFloat(color[1]) / iter
      deltab = parseFloat(color[2]) / iter

      for (var j = 0; j < iter; ++j){
        for (var serial = 1; serial <= 118; ++serial){
          if (active) return;
          table_show(`${serial} 6 ${r} ${g} ${b}`);
          tableWebSocket.send(`${serial} 6 ${r} ${g} ${b}`)
          
        }
        r += deltar
        g += deltag
        b += deltab
        await sleep(50)
      }
      r = color[0]
      g = color[1]
      b = color[2]

      for (var j = 0; j < iter; ++j){
        for (var serial = 1; serial <= 118; ++serial){
          if (active) return;
          table_show(`${serial} 6 ${r} ${g} ${b}`);
          tableWebSocket.send(`${serial} 6 ${r} ${g} ${b}`);
        }
        r -= deltar
        g -= deltag
        b -= deltab
        await sleep(50)
      }
      for (var serial = 1; serial <= 118; ++serial){
        table_show(`${serial} 6 0 0 0`);  
        tableWebSocket.send(`${serial} 6 0 0 0`);
      }
    }
  }, 
  async function(){
    for (var i = 0; i < 10; ++i){
      r1 = Math.random() * 255
      g1 = Math.random() * 255
      b1 = Math.random() * 255
      
      
      for (var ser = 1; ser <= 118; ++ser){
        if (Math.random() > 0.5){
          table_show(`${ser} 6 0 0 0`);
          tableWebSocket.send(`${serial} 6 0 0 0`); 
        }
        else {
          table_show(`${ser} 6 ${r1} ${g1} ${b1}`);
          tableWebSocket.send(`${ser} 6 ${r1} ${g1} ${b1}`);
        }
      }
      
      await sleep(1000);
    }
    for (var ser = 1; ser <= 118; ++ser){
      table_show(`${ser} 6 0 0 0`);
      tableWebSocket.send(`${serial} 6 0 0 0`); 
    }
  }, 
  async function (){
    col = [[255, 0, 0], [255, 136, 0], [0, 255, 0], [0, 255, 217], [0, 0, 255], [255, 0, 234]]
    color1 = col[getRndInteger(0, 6)]
    colors1 = []
    colors_cur = []
    deltas = []
    for (var ser = 1; ser <= 118; ++ser){
      colors_cur.push([0, 0, 0])
      iter = parseFloat(20 + getRndInteger(0, 31))
      
      deltas.push([color1[0] / iter, color1[1] / iter, color1[2] / iter])
    }

    for (var i = 0; i < 500; ++i){
      for (var ser = 1; ser <= 118; ++ser){
        colors_cur[ser - 1][0] += deltas[ser - 1][0];
        colors_cur[ser - 1][1] += deltas[ser - 1][1];
        colors_cur[ser - 1][2] += deltas[ser - 1][2];
        if ((colors_cur[ser - 1][0] >= color1[0] & colors_cur[ser - 1][1] >= color1[1]  & colors_cur[ser - 1][1] >= color1[1] )
        || (colors_cur[ser - 1][0] <= 0 & colors_cur[ser - 1][1] <= 0 & colors_cur[ser - 1][2] <= 0)) {
          deltas[ser - 1][0] *= -1;
          deltas[ser - 1][1] *= -1;
          deltas[ser - 1][2] *= -1;
        }

        table_show(`${ser} 6 ${colors_cur[ser - 1][0]} ${colors_cur[ser - 1][1]} ${colors_cur[ser - 1][2]}`)
        tableWebSocket.send(`${ser} 6 ${colors_cur[ser - 1][0]} ${colors_cur[ser - 1][1]} ${colors_cur[ser - 1][2]}`);
      }
      await sleep(50)
    }
    for (var ser = 1; ser <= 118; ++ser){
      table_show(`${ser} 6 0 0 0`);
      tableWebSocket.send(`${ser} 6 0 0 0`);
    }
  }, 

]



document.getElementById('touchscreen1').onclick = function () {
  show_isotopes_around_element(id_chosen)
  

}
document.getElementById('touchscreen2').onclick = function () {
  continue_iso()
}
function dim_table(id) {
  document.getElementById('touchscreen1').style.visibility = "visible";
  document.getElementById('main-header').style.opacity = "0.2";
  for (var i = 1; i <= 118; ++i) {
    if (i != id) {
      element = document.getElementById(`element-${i}`)
      element.style.transition = "0"
      element.style.zIndex = "-1";
      element.style.transition = "0.5s"

    }
  }
  for (var i = 1; i <= 118; ++i) {
    if (i != id) {
      element = document.getElementById(`element-${i}`)
      element.style.opacity = "0.2";

    }
  }
}

function highlight_table(id) {
  document.getElementById('touchscreen1').style.visibility = "hidden";
  document.getElementById('main-header').style.opacity = "1";
  for (var i = 1; i <= 118; ++i) {
    if (i != id) {
      element = document.getElementById(`element-${i}`)
      element.style.opacity = "1";
      element.style.zIndex = "2";
    }
  }
}

function show_isotopes_around_element(id) {
  tableWebSocket.send(`${id} 6 0 0 0`);
  table_show(`${id} 6 0 0 0`)
  
  if(!clicked) {
    var rgb = hexToRgb(element_colors[id]);

    tableWebSocket.send(`${id} 6 ${rgb.r} ${rgb.g} ${rgb.b}`)
    table_show(`${id} 6 ${rgb.r} ${rgb.g} ${rgb.b}`)
    clicked = true
  }
  amount_isotopes = element_isotopes[id].length;
  r = 100;
  angle = 2 * Math.PI / amount_isotopes;
  angle_cur = 0;

  if (id_chosen != -1) {
    
    anim1 = anime.timeline({
      duration: 300,
      easing: 'easeInOutExpo',
    })
    for (var i = 0; i < element_isotopes[id_chosen].length; ++i) {
      document.getElementById(`element-${id_chosen}-${element_isotopes[id_chosen][i]}`).style.zIndex = 0;
      anim1.add({
        targets: `#element-${id_chosen}-${element_isotopes[id_chosen][i]}`,
        translateX: 0,
        translateY: 0,
        opacity: "0",
      }, '-=150')
      angle_cur += angle;
    }
  }
  if (id_chosen == id) {
    highlight_table(id);
    id_chosen = -1;
    clicked = false;
    return;
  }
  dim_table(id);
  id_chosen = id;


  anim = anime.timeline({
    duration: 300,
    easing: 'easeInOutExpo',
  })
  for (var i = 0; i < amount_isotopes; ++i) {
    anim.add({
      targets: `#element-${id}-${element_isotopes[id][i]}`,
      translateX: r * Math.cos(angle_cur),
      translateY: r * Math.sin(angle_cur),
      opacity: "1",
    }, '-=150');
    angle_cur += angle;
  }
}

function blur_all_elements(serial, q) {
  document.getElementById('main-header').style.filter = "blur(5px)"
  for (var id = 1; id <= 118; ++id) {
    if (id == serial) {
      document.getElementById(`element-main-${serial}`).style.filter = "blur(5px)";
      for (var i = 0; i < element_isotopes[serial].length; ++i) {
        if (q == i) continue;
        document.getElementById(`element-${serial}-${element_isotopes[serial][i]}`).style.filter = "blur(5px)";
      }
    }
    else document.getElementById(`element-${id}`).style.filter = "blur(5px)";
  }
}
function unblur_all_elements() {
  document.getElementById('main-header').style.filter = "none"
  for (var id = 1; id <= 118; ++id) {
    document.getElementById(`element-${id}`).style.filter = "none";
    document.getElementById(`element-main-${id}`).style.filter = "none";
    for (var i = 0; i < element_isotopes[serial_chosen].length; ++i) {
      document.getElementById(`element-${serial_chosen}-${element_isotopes[serial_chosen][i]}`).style.filter = "none";
    }
  }
}

text = anime({
  targets: '.new-particle-plain',
  translateY: -1080,
  autoplay: false,
  duration: 1000,
  easing: 'easeInOutExpo',
})
anim_iso = anime.timeline({
  autoplay: false,
  duration: 1000,
  easing: 'easeInOutExpo',
})

function show_isotope(q, serial) {
  serial_chosen = serial;
  q_chosen = q;
  const rgb = hexToRgb(element_colors[serial_chosen]);
  //tableWebSocket.send(`${serial_chosen} 6 0 0 0`);
  tableWebSocket.send(`${serial_chosen} ${6-q_chosen-2} ${rgb.r} ${rgb.g} ${rgb.b}`);
  table_show(`${serial_chosen} ${6-q_chosen-2} ${rgb.r} ${rgb.g} ${rgb.b}`)

  document.getElementById('touchscreen2').style.visibility = "visible";
  document.getElementById('touchscreen2').style.zIndex = "4";
  document.getElementById('touchscreen2').style.pointerEvents = "none";
  document.getElementById('touchscreen1').style.pointerEvents = "none";
  document.getElementById('continue-new-particle').style.pointerEvents = "none";

  document.getElementById(`element-${serial}-${element_isotopes[serial][q]}`).style.zIndex = "3";
  document.getElementById(`element-${serial}-${element_isotopes[serial][q]}`).style.pointerEvents = "none";


  blur_all_elements(serial, q)

  deltax = 165 - element_position[serial][0];
  deltay = 300 - element_position[serial][1];

  anim_iso = anime({
    targets: `#element-${serial}-${element_isotopes[serial][q]}`,
    scale: 5,
    translateX: `${deltax}px`,
    translateY: `${deltay}px`,
    autoplay: false,
    easing: 'easeInOutExpo',
  })
  anim_iso.play()
  text.direction = "normal"
  text.finished.then(function () {
    document.getElementById('touchscreen1').style.pointerEvents = "auto";
    document.getElementById('touchscreen2').style.pointerEvents = "auto";
    document.getElementById('continue-new-particle').style.pointerEvents = "auto";
  });
  text.play();

}

function continue_iso() {


  tableWebSocket.send(`${serial_chosen} ${6-q_chosen-2} 0 0 0`);
  table_show(`${serial_chosen} ${6-q_chosen-2} 0 0 0`)
  document.getElementById('touchscreen2').style.pointerEvents = "none";
  document.getElementById('touchscreen1').style.pointerEvents = "none";
  document.getElementById('continue-new-particle').style.pointerEvents = "none";
  anim_iso.direction = "reverse";
  anim_iso.play();
  text.direction = "reverse";
  text.play();
  text.finished.then(function () {
    document.getElementById('touchscreen1').style.pointerEvents = "auto";
    document.getElementById('touchscreen2').style.pointerEvents = "auto";
    document.getElementById(`element-${serial_chosen}-${element_isotopes[serial_chosen][q_chosen]}`).style.zIndex = "1";
    document.getElementById(`element-${serial_chosen}-${element_isotopes[serial_chosen][q_chosen]}`).style.pointerEvents = "auto";
    
    serial_chosen = -1;
    q_chosen = -1
    
  });
  document.getElementById('touchscreen2').style.visibility = "hidden";
  document.getElementById('touchscreen2').style.zIndex = "0";
  unblur_all_elements();

}



for (var i = 0; i < 9; ++i) {
  if (i < 7) ind = 1;
  else ind = 2;

  document.getElementById('table' + ind).innerHTML += `
  <div class='table-row' id='table-row-${i}'></div>
  `

  for (var j = 0; j < 18; ++j) {
    serial = table_element_rel[i][j]
    if (serial == 0) visibility = '-empty'
    else visibility = ''

    if (serial != 0) intext = element_names[serial][0];
    else intext = ''
    document.getElementById(`table-row-${i}`).innerHTML += `
      <div class='table-element${visibility}' id="element-${serial}">
        
      </div>
    `


    if (visibility == '-empty') continue;

    element_position[serial] = [110 + interval_between_elements * (j + 1) + element_width * j, element_width * i + (i + 1) * interval_between_elements]
    color = element_colors[serial]


    if (serial < 114 || serial > 118){
      for (var q = 0; q < element_isotopes[serial].length; ++q) {
        document.getElementById(`element-${serial}`).innerHTML += `
        <div class="table-element-isotope" onclick=show_isotope(${q},"${serial}") id="element-${serial}-${element_isotopes[serial][q]}" style="color: ${color}; border-color: ${color}">
          <div class='table-element-left-space'>
            <p class='table-element-serial'>${serial}</p>
            <p class='table-element-name'>${element_names[serial][0]}</p>
            <p class='table-element-name-full'>${element_names[serial][1]}</p>
          </div>
          <div class='table-element-dividing-line' style="background-color: ${color}"></div>
          <div class='table-element-right-space'>
            <p class='table-element-isotope-num'>${element_isotopes[serial][q]}</p>
          </div>
        </div>
        `
        
        
      }
      
    } 
    if (serial < 114 || serial > 118) onclickf = `onclick=show_isotopes_around_element("${serial}")`;
    else onclickf = '';
    document.getElementById(`element-${serial}`).innerHTML += `
      <div class="table-element-main" ${onclickf} style="border-color: ${color}; color: ${color}" id="element-main-${serial}">
        <div class='table-element-left-space'>
          <p class='table-element-serial'>${serial}</p>
          <p class='table-element-name'>${element_names[serial][0]}</p>
          <p class='table-element-name-full'>${element_names[serial][1]}</p>
        </div>
        <div class='table-element-dividing-line' style="background-color: ${color}"></div>
        <div class='table-element-right-space' id='element-${serial}-isotopes-space'>

        </div>
      </div>
    `
    for (var q = 0; q < element_isotopes[serial].length; ++q) {
      document.getElementById(`element-${serial}-isotopes-space`).innerHTML +=
        `<p class='table-element-isotope-num'>${element_isotopes[serial][q]}</p>`
    }
  }

}

for (var i = 0; i < 9; ++i){
  document.getElementById('mini-table-window').innerHTML += `
    <div style='display: flex; margin-top: 30px;' id='mini-table-row-${i}'></div>
  `
  for (var j = 0; j < 18; ++j){
    serial = table_element_rel[i][j]

    document.getElementById(`mini-table-row-${i}`).innerHTML += `
      <div style='display: flex; margin-left: 10px;' id='mini-table-element-box-${serial}'></div>
    `

    for (var q = 0; q < 6; ++q){
      if (table_element_rel[i][j] == 0) c = 0;
      else c = 20 + (q) / 5 * 50
      document.getElementById(`mini-table-row-${i}`).innerHTML += `
        <div style='display: block; width: 10px; height: 10px; position: relative; left: 5px; top: ${(q) * 5}px; background-color: rgb(${c}, ${c}, ${c});' id='mini-element-${serial}-${q + 1}'></div>
      `
    }
  }
}

tableWebSocket.onclose = function(e) {
  console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
  setTimeout(function() {
    tableWebSocket = new WebSocket("ws://127.0.0.1:8000")
  }, 1000);
};

tableWebSocket.onerror = function(err) {
  console.error('Socket encountered error: ', err.message, 'Closing socket');
  ws.close();
};

animations[0]()