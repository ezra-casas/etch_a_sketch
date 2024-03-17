const grid = document.querySelector(".grid");

let gridSize = 40

for (let i = 0; i < gridSize; i++) {
  let parentDiv = document.createElement("div")
  parentDiv.classList.add(`row`)

  for (let j = 0; j < gridSize; j++) {
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



const btn = document.querySelector("#btn-clear");
btn.addEventListener("click", () => {
  const blocks = document.querySelectorAll(".block")
 blocks.forEach(block => {
    block.style.backgroundColor = ""
  })
})
