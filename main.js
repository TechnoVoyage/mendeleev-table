

id_chosen = -1;


document.getElementById('touchscreen').onclick = function(){
  f(id_chosen)
}
function dim_table(id){
  document.getElementById('touchscreen').style.visibility = "visible";
  for (var i = 1; i <= 118; ++i){
    if (i != id){
      element = document.getElementById(`element-${i}`)
      element.style.transition = "0"
      element.style.zIndex = "-1";
      element.style.transition = "0.5s"
      
    }
  }
  for (var i = 1; i <= 118; ++i){
    if (i != id){
      element = document.getElementById(`element-${i}`)
      element.style.opacity = "0.2";
      
    }
  }
}

function highlight_table(id){
  document.getElementById('touchscreen').style.visibility = "hidden";
  for (var i = 1; i <= 118; ++i){
    if (i != id){
      element = document.getElementById(`element-${i}`)
      element.style.opacity = "1";
      element.style.zIndex = "2";
    }
  }
}

function f(id) {

  amount_isotopes = element_isotopes[id].length;
  r = 100;
  angle = 2 * Math.PI / amount_isotopes;
  angle_cur = 0;

  if (id_chosen != -1){
    anim1 = anime.timeline({
      duration: 300,
      easing: 'easeInOutExpo',
    })
    for (var i = 0; i < element_isotopes[id_chosen].length; ++i){
    
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
    return;
  }
  dim_table(id);
  id_chosen = id;
  anim = anime.timeline({
    duration: 300,
    easing: 'easeInOutExpo',  
  })
  for (var i = 0; i < amount_isotopes; ++i){
    anim.add({
      targets: `#element-${id}-${element_isotopes[id][i]}`,
      translateX: r * Math.cos(angle_cur),
      translateY: r * Math.sin(angle_cur),
      opacity: "1",
    }, '-=150');
    angle_cur += angle;
  }
}
show_is = anime({
  targets: '.new-particle-text',
  translateX: 1550,
  duration: 1200,
  autoplay: false,
})
function show_isotope(q, serial){
  show_is.play(); 
  console.log(`element-${serial}-${element_isotopes[serial][q]}`)
  document.getElementById(`element-${serial}-${element_isotopes[serial][q]}`).style.position="absolute";
  anime({
    targets: `#element-${serial}-${element_isotopes[serial][q]}`,
    left: '0px',
    duration: 1000,
    scale: 6,
  }).finished.then(function () {
    // alert("SFSF");
    document.getElementById(`element-${serial}-${element_isotopes[serial][q]}`).style.backgroundColor="blue";
  })
}
function continue_iso(){
  show_is.direction = "reverse";
  // show_is.play();
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

    
    
    for (var q = 0; q < element_isotopes[serial].length; ++q){
      document.getElementById(`element-${serial}`).innerHTML += `
      <div class="table-element-isotope" onclick=show_isotope(${q},"${serial}") id="element-${serial}-${element_isotopes[serial][q]}">
        ${element_isotopes[serial][q]}
      </div>
      `
    }
    document.getElementById(`element-${serial}`).innerHTML += `
      <div class="table-element-main" onclick=f("${serial}")>
        <div class='table-element-left-space'>
          <p class='table-element-serial'>${serial}</p>
          <p class='table-element-name'>${element_names[serial][0]}</p>
          <p class='table-element-name-full'>${element_names[serial][1]}</p>
        </div>
        <div class='table-element-dividing-line'></div>
      </div>
    `
  }

}
