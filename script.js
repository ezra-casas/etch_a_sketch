const grid = document.querySelector(".grid");

let gridSize = 20; 

for (let i = 0; i < gridSize; i++){
  let parentDiv = document.createElement("div")
  parentDiv.classList.add(`row`)
//  parentDiv.classList.add(`${i+1}`)

  for (let j = 0; j < gridSize; j++) {
    let div = document.createElement("div")

    div.classList.add("block")
    div.textContent = `${j+1}`

    parentDiv.appendChild(div)
  }
  grid.appendChild(parentDiv)
}


// console.log(grid)
