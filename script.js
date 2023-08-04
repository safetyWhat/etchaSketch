const container = document.querySelector('.container');
let rowNum = 1
let squareNum = 1

for (x = 0; x < 16; x++) {
    let row = 'row' + rowNum;
    //console.log(row);
    const rows = document.createElement('div');
    rows.setAttribute('id', row);
    rows.className = 'rows';
    container.appendChild(rows);
    
    for (i = 0; i < 16; i++) {
        //console.log(squareNum);
        const squares = document.createElement('div');
        squares.className = 'squares';
        //squares.textContent = squareNum;
        rows.appendChild(squares);
        squareNum++
    }
    rowNum++
}
let squares = document.querySelectorAll('.squares')
squares.forEach(function(changeColor) {
changeColor.addEventListener("mouseenter", (event) => {
    event.target.style.background = "black";
}, false);})

