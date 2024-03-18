const grid = document.querySelector(".grid");
let gridSize = 16; 

function clearGrid(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.style.backgroundColor = "";
    })
}

// GRID
function createGrid(size){
    grid.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let parentDiv = document.createElement("div")
        parentDiv.classList.add(`row`)

        for (let j = 0; j < size; j++) {
            let div = document.createElement("div")

            div.classList.add("block")
            div.setAttribute("id", `row:${i+1}-col:${j+1}`)

            div.addEventListener("mouseenter",  () => {
                div.style.backgroundColor = "#fff"
            })

            parentDiv.appendChild(div);
        };
        grid.appendChild(parentDiv)
    }
}

createGrid(gridSize);

// Size Buttons
const sizeBtns = document.querySelectorAll(".box");

sizeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        clearGrid();
        let size = Number(btn.id);
        createGrid(size);
    });
})

// button logic
const btn = document.querySelector("#btn-clear");
btn.addEventListener("click", clearGrid)



