// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};
defaultGrid();

var boxes = document.getElementsByClassName("cell");

// boxes.addEventListener("mouseover", myFunction);

function myFunction(e) {
    e.target.style.background = 'blue'
};

function myFunction2(e) {
    e.target.style.background = 'black'
};

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", myFunction);
}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseleave", myFunction2);
}