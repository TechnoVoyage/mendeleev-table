id_chosen = -1;

function f(id) {

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
    
      document.getElementById(`element-${id_chosen}-${element_isotopes[id_chosen][i]}`).style.zIndex = 0;
      anim1.add({
        targets: `#element-${id_chosen}-${element_isotopes[id_chosen][i]}`,
        translateX: 0,
        translateY: 0,
      }, '-=150');
      angle_cur += angle;
    }
  }
  if (id_chosen == id) { id_chosen = -1; return;}
  id_chosen = id;
  anim = anime.timeline({
    duration: 300,
    easing: 'easeInOutExpo',  
  })
  for (var i = 0; i < amount_isotopes; ++i){
    
    document.getElementById(`element-${id}-${element_isotopes[id][i]}`).style.zIndex = 1;
    anim.add({
      targets: `#element-${id}-${element_isotopes[id][i]}`,
      translateX: r * Math.cos(angle_cur),
      translateY: r * Math.sin(angle_cur),
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
function show_isotope(id){
  show_is.play();
}
function continue_iso(){
  show_is.direction = "reverse";
  show_is.play();
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
