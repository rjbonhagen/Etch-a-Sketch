let container = document.querySelector(".container");
let reset = document.querySelector(".reset");
let grid;

createGrid();

function createGrid(amount = 16) {
    if (grid) grid.remove();
    grid = document.createElement("div")
    grid.classList.add("grid")
    container.appendChild(grid)
    for (let i = 0; i < amount*amount;i++) {
        createCell(grid, amount)
    }   
}

function createCell(grid, amount) {
    const cell = document.createElement("div")
    cell.style.width = `${100/amount}%`
    cell.style.height = `${100/amount}%`
    cell.style.opacity = 0;
    grid.appendChild(cell)

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black"
        cell.style.opacity = Math.min(1, Number(cell.style.opacity) +.1)
    })
}


reset.addEventListener("click", () => createGrid(promptGridSize()))

function promptGridSize() {
    let res = 0;
    do {
        res = prompt("Enter number of squares per side (1-100)")
        res = parseInt(res)
    }
    while (isNaN(res) || res < 1 || res > 100)
    
    return res;
}
