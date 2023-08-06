const container = document.querySelector('.container');
let rowNum = 1;
let squareNum = 1;
let y = 16;
let squares = document.querySelectorAll('.squares');

let draw = function() {
    let squares = document.querySelectorAll('.squares');
    squares.forEach(function(changeColor) {
        changeColor.addEventListener("mouseenter", (event) => {
            event.target.style.background = "black";
            }, false);
    })
}

let setGrid = function (y){
    for (x = 0; x < y; x++) { //create rows within container
        let row = 'row' + rowNum;
        const rows = document.createElement('div');
        rows.setAttribute('id', row);
        rows.className = 'rows';
        container.appendChild(rows);
    
    for (i = 0; i < y; i++) { //create squares within the row
        const squares = document.createElement('div');
        squares.className = 'squares';
        rows.appendChild(squares);
        squareNum++
    }
    rowNum++
    }
}
setGrid(y);
draw();

let reset = function() {
    let squares = document.querySelectorAll('.squares');
    squares.forEach(el => el.remove()); //removes all current squares from rows
    let rows = document.querySelectorAll('.rows');
    rows.forEach(el => el.remove()); //removes all rows from the container
    let gridNum = prompt("Enter a number between 4 and 100", '4');
    if (gridNum > 100) { //if user enters number greater than 100, default to 100
        gridNum = 100
        console.log(gridNum)
    } else if (gridNum < 4) { //if user enters number less than 4, default to 4
        gridNum = 4
    }
    y = gridNum
    console.log(y)
    setGrid(y);
    draw();
}