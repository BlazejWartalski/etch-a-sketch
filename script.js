// Sets important constants and variables

const gridContainer = document.getElementById("gridContainer");
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
var boxes = document.getElementsByClassName("cell");

function customGrid(size) {
    makeRows(size);
    makeColumns(size);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseenter", myFunction2);
    };
};

// Takes (rows, columns) input and makes a grid
function makeRows(size) {

    // Creates rows
    for (r = 0; r < size; r++) {
        let row = document.createElement("div");
        gridContainer.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(size) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < size; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

function resetSketchbox() {
    let size = prompt("Please enter desired number of boxes", "Please enter a valid number");
    intSize = parseInt(size);
    console.log(typeof(intSize));
    console.log(intSize);
    if(size > 100) {
        console.log("Too big.")
    } else if(isNaN(intSize)) {
        console.log(typeof intSize);
        console.log("Please insert a number, without decimal spaces.");
    } else {
        var refreshGrid = document.getElementsByClassName("cell");
        var refreshGridRow = document.getElementsByClassName("gridRow");

        while(refreshGrid.length > 0){
            refreshGrid[0].parentNode.removeChild(refreshGrid[0]);
            refreshGridRow[0].parentNode.removeChild(refreshGridRow[0]);
        }
        customGrid(size);
    }
};

resetSketchbox();


function myFunction2(e) {
    e.target.classList.add('hovered');
};

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseenter", myFunction2);
};

function removeClass() {
    console.log('fuck');
    var allBoxes = document.getElementsByClassName("cell");
    console.log(allBoxes);
    for (let box of allBoxes) {
        box.classList.remove("hovered");
    }
    // allBoxes.classList.remove("hovered");
};

button.addEventListener("click", removeClass);

button2.addEventListener("click", resetSketchbox);
