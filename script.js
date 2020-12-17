const sketchGrid = document.querySelector(".sketchGrid");
const clearButton = document.querySelector(".toyHeader-clearButton");

// Event listeners
sketchGrid.addEventListener("mouseover", setHoverColor);
clearButton.addEventListener("click", clearGrid);

function createGrid(numOfGridItemsPerSide) {

  const itemWidth = sketchGrid.clientWidth / numOfGridItemsPerSide;
  const itemHeight = sketchGrid.clientHeight / numOfGridItemsPerSide;

  for (let i = 0; i < numOfGridItemsPerSide; i++) {
    for (let j = 0; j < numOfGridItemsPerSide; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("gridElement");
      newDiv.setAttribute('style',
          `width: ${itemWidth}px; height: ${itemHeight}px`);
      sketchGrid.appendChild(newDiv);
    }
  }
}

function setHoverColor(event) {
  const target = event.target;

  if (target === sketchGrid) return;

  target.classList.add("basicHover");
}

function clearGrid() {
  const newGridSize = promptForNewSize();
  sketchGrid.innerHTML = "";
  createGrid(newGridSize);
}

function promptForNewSize() {
  let size = 0;

  do {
    size = +prompt("How many squares per side should the grid be?");
  } while (size > 100 || size < 1)

  return size;
}

createGrid(4);