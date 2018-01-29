var el = document.getElementsByClassName('container');
var length = window.screen.width;
var toolbar = document.getElementsByClassName('toolbar')[0];
var divColors = document.getElementsByClassName('toolbar')[0];
divColors.addEventListener('click', updateColor);
var mouseDownFlag = 0;

function clearCanvas() {
    var td = document.getElementsByTagName('td');
    for (var i in td) {

        td[i].style.backgroundColor = 'white';
    }
}
function updateTDColor(event) {
    var td = event.target;
    if (event.type === 'mouseclick') {if (td.tagName === 'TD') {td.style.backgroundColor = currentColor;
    mouseDownFlag = 0;
    }}
    else if (event.type === 'mousedown') mouseDownFlag = 1;
    else if (mouseDownFlag === 0) return;
    if (td.tagName === 'TD') td.style.backgroundColor = currentColor;
    }
    
function updateColor(event) {
    var color = event.target.id;
    if (colors.includes(event.target.id)) setCurrentColor(color);
    }
function drawTable(parent, n, m) {
    var table = document.createElement('table');
    table.setAttribute('draggable', 'false');
    parent.insertBefore(table, parent.getElementsByClassName('toolbar')[0]);
    table.setAttribute('class','canvas');
    for (var i=1; i<=n; i++) {
        var currentTR = createTR(table, i);
        for (var j=1; j<=m; j++) {
            var currentTD = createTD(currentTR, j);
            //currentTD.innerHTML = '';
        }

    }
}
function createTR(parent, coor) {
    var tr = document.createElement('tr');
    parent.appendChild(tr);
    tr.setAttribute('id','x'+coor);
    return tr;
}
function createTD(parent, coor) {
    var td = document.createElement('td');
    parent.appendChild(td);
    td.setAttribute('id','y'+coor);
    return td;
}
function drawColors(parent, colors) {
    for (var i in colors) {
        var div = document.createElement('div');
        parent.appendChild(div);
        div.setAttribute('id', colors[i]);      
        div.setAttribute('class', 'colors');
        div.setAttribute('style', 'background-color: '+colors[i]+';');
        div.innerHTML = '&nbsp;';
    }
}
function setCurrentColor(newCurrentColor) {
    var el = document.getElementById(currentColor);
    el.style.border = '2px solid gray';
    currentColor = newCurrentColor;
    var el = document.getElementById(currentColor);
    el.style.border = '2px solid teal';
}

var colors = ['red', 'orange', 'yellow', 'green', 'lightskyblue', 'blue', 'purple', 'white', 'black'];
var currentColor = 'black';


drawTable(el[0], 40, 40);
var table = document.getElementsByTagName('table')[0];
table.addEventListener('mousedown', updateTDColor);
table.addEventListener('mouseout', updateTDColor);
table.addEventListener('mouseup', function () {mouseDownFlag = 0;});
drawColors(toolbar, colors);
setCurrentColor('black');
var divColors = document.getElementsByClassName('toolbar')[0];
divColors.addEventListener('click', updateColor);
var clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);
