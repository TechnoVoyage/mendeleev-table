

function f(id) {
  alert(id)
}

for (var i = 0; i < 9; ++i) {
  if (i < 7) ind = 1;
  else ind = 2;

  document.getElementById('table' + ind).innerHTML += `
  <div class='table-row' id='table-row-${i}'></div>
  `
  for (var j = 0; j < 18; ++j) {
    if (table_element_rel[i][j] == 0) visibility = '-empty'
    else visibility = ''

    if (table_element_rel[i][j] != 0) intext = element_names[table_element_rel[i][j]][0];
    else intext = 'hui'
    document.getElementById(`table-row-${i}`).innerHTML += `
    <div class='table-element${visibility}'  style="user-select: none;" onclick=f("${intext}_${table_element_rel[i][j].toString()}")>
      ${intext}
    </div>
    `
  }

}
