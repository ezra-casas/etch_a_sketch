const grid = document.querySelector(".grid");

let gridSize = 20;

for (let i = 0; i < gridSize; i++) {
  let parentDiv = document.createElement("div")
  parentDiv.classList.add(`row`)

  for (let j = 0; j < gridSize; j++) {
    let div = document.createElement("div")

    div.classList.add("block")
    div.setAttribute("id", `row:${i+1}-col:${j+1}`)
    
    div.addEventListener("mouseenter",  e => {
      div.style.backgroundColor = "#fff"
    })

    parentDiv.appendChild(div);
  };
  grid.appendChild(parentDiv)
}


