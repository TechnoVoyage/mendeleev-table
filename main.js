table_element_rel = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], 
  [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10], 
  [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], 
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], 
  [55, 56, 0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], 
  [87, 88, 0, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118], 
  [0, 0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
  [0, 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
]

function f(id){
  alert('trrrrrrrrrratatatat' + id)
}

for (var i = 0; i < 7; ++i){
  document.getElementById('table1').innerHTML += `
  <div class='table-row' id='table-row-${i}'></div>
  `
  for (var j = 0; j < 18; ++j){
    if (table_element_rel[i][j] == 0) visibility = '-empty'
    else visibility = ''
    document.getElementById(`table-row-${i}`).innerHTML += `
    <div class='table-element${visibility}'  style="user-select: none;" onclick=f(${table_element_rel[i][j]})>
      <p>${table_element_rel[i][j]}</p>
    </div>
    `
  }
 
}
for (var i = 7; i < 9; ++i){
  document.getElementById('table2').innerHTML += `
<div class='table-row' id='table-row-${i}'></div>
`
  for (var j = 0; j < 18; ++j){
    if (table_element_rel[i][j] == 0) visibility = '-empty'
  else visibility = ''
  document.getElementById(`table-row-${i}`).innerHTML += `
  <div class='table-element${visibility}'  style="user-select: none;" onclick=f(${table_element_rel[i][j]})>
    <p>${table_element_rel[i][j]}</p>
  </div>
  `
  }
}