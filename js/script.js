createGrid();

/* the canvas or paper size is set to 600px the function calculates the
size of each square by dividing the canvas size by the grid size the user
entered
*/
function createGrid() {
  let gridSize = prompt("How many squares per side?");
  for (let i = 0; i < gridSize*gridSize; i++) {
    const square = document.createElement("div");
    const paper = document.getElementById("container");
    square.classList.add("square");
    square.style.width = `${((600-((gridSize*2)))/ gridSize)}px`;
    square.style.height = `${((600-((gridSize*2)))/ gridSize)}px`;
    paper.appendChild(square);    
  }  
}
