const container = document.querySelector(".container");
const button = document.querySelector(".btn");
createDefaultGrid();

button.addEventListener("click", e =>{
    let input = prompt("Enter how many squared cells you want, max 100: ");
    if (input > 100){
        input = 100;
    }
    createNewGrid(input);
});

function createRows(rowNum){
    let row;
    for(let i = 0; i < rowNum; i++){
        row = document.createElement("div");
        row.classList.add("row")
        container.appendChild(row);
    }

}

function createCells(cellNum){
    let cell;
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        for(let i = 0; i < cellNum; i++){
            cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            cell.addEventListener("mouseover", e => {
                e.target.style.background = "purple";
            })
        }
    });
}


function createDefaultGrid(){
    createRows(16);
    createCells(16);
}

function removeGrid(){
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => 
        row.remove()
    )
    console.log("Last grid has been removed sucessfully.");
}

function createNewGrid(cellNum){
    removeGrid();
    createRows(cellNum);
    createCells(cellNum);
}