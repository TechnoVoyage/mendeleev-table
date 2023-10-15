

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
      element.style.opacity = "0.5";
      
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
  console.log(1)
  amount_isotopes = element_isotopes[id].length;
  r = 70;
  angle = 2 * Math.PI / amount_isotopes;
  angle_cur = 0;

  if (id_chosen != -1){
    anim1 = anime.timeline({
      duration: 300,
      easing: 'easeInOutExpo',
    })
    for (var i = 0; i < element_isotopes[id_chosen].length; ++i){
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
function show_isotope(id){
  alert(id)
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
    else intext = 'hui'
    document.getElementById(`table-row-${i}`).innerHTML += `
      <div class='table-element${visibility}'  style="user-select: none"; id="element-${serial}">
      </div>
    `
    if (visibility == '-empty') continue; 

    
    
    for (var q = 0; q < element_isotopes[serial].length; ++q){
      document.getElementById(`element-${serial}`).innerHTML += `
      <div class="table-element-isotope" onclick=show_isotope("${element_isotopes[serial][q]}") id="element-${serial}-${element_isotopes[serial][q]}">
        ${element_isotopes[serial][q]}
      </div>
      `
    }
    document.getElementById(`element-${serial}`).innerHTML += `
      <div class="table-element-main" onclick=f("${serial}")>
      ${element_names[serial][0]}
      </div>
    `
  }

}
