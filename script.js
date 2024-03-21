// Selectors
const grid = document.querySelector("#grid");
const slider = document.querySelector("#slider");
const randomBtn = document.querySelector("#randomize");
const btn = document.querySelector("#btn-clear");
const sizeBtns = document.querySelectorAll(".box");

// Initializing the grid with the following
let gridXY = 500;
let gridSize = 16;
grid.style.height = `${gridXY}px`;
grid.style.width = `${gridXY}px`;
createGrid(gridSize);

let isRandomColor = false;


// Event Listeners
randomBtn.addEventListener("click", randomizeColor);

btn.addEventListener("click", clearGrid)

slider.addEventListener("input", updateGridSize);

// Size Buttons logic
sizeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    clearGrid();
    let size = Number(btn.id);
    createGrid(size);
    slider.value = size
  });
})


// FUNCTIONS
function updateGridSize(){
  gridSize = getSliderValue();
  createGrid(gridSize);
}

function randomizeColor(){
  isRandomColor ? randomBtn.style.backgroundColor = "white" : randomBtn.style.backgroundColor = "grey";
  isRandomColor = !isRandomColor
}


function getSliderValue(){
  return Number(slider.value);
}

function clearGrid() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach(block => {
    block.style.backgroundColor = "";
  })
}

// GRID creation
function createGrid(size) {
  grid.innerHTML = "";
  let boxSize = gridXY / size;

  for (let i = 0; i < size; i++) {
    // BOX creation
    for (let j = 0; j < size; j++) {
      const box = document.createElement("div");
      // Handle block color change
      box.addEventListener("mouseenter", () => {
        if (isRandomColor){
          box.style.backgroundColor =  "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
        }else{
          box.style.backgroundColor = "#fff";
        }
      });

      box.classList.add("block");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      grid.appendChild(box);
    };
  };
}


