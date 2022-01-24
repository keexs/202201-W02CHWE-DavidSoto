const rows = 50;
const columns = 50;

function setGrid() {
  return new Array(rows).fill(0).map(() => Array(columns).fill(0));
}

const grid = setGrid();

function refreshGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      if (cell.getAttribute("class", "live")) {
        grid[i][j] = 1;
      }
    }
  }
}

function onUserclick() {
  const clickedCell = this.id.split("-");
  const clickedCellRow = clickedCell[0];
  const clickedCellColumn = clickedCell[1];
  const cell = document.getElementById(
    `${clickedCellRow}-${clickedCellColumn}`
  );
  clickedCell.onclick(cell.setAttribute("class", "live"));
}

function drawGrid() {
  const gridContainer = document.getElementById("gridContainer");
  const table = document.getElementById("table");
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${i}-${j}`);
      cell.setAttribute("class", "dead");
      cell.onclick = onUserclick;
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  gridContainer.appendChild(table);
}

function countNeighbors(row, col) {
  let count = 0;
  if (row - 1 >= 0) {
    if (grid[row - 1][col] === 1) count++;
  }
  if (row - 1 >= 0 && col - 1 >= 0) {
    if (grid[row - 1][col - 1] === 1) count++;
  }
  if (row - 1 >= 0 && col + 1 < col) {
    if (grid[row - 1][col + 1] === 1) count++;
  }
  if (col - 1 >= 0) {
    if (grid[row][col - 1] === 1) count++;
  }
  if (col + 1 < col) {
    if (grid[row][col + 1] === 1) count++;
  }
  if (row + 1 < row) {
    if (grid[row + 1][col] === 1) count++;
  }
  if (row + 1 < row && col - 1 >= 0) {
    if (grid[row + 1][col - 1] === 1) count++;
  }
  if (row + 1 < row && col + 1 < col) {
    if (grid[row + 1][col + 1] === 1) count++;
  }
  return count;
}

function drawNewGeneration(){
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if(grid[i][j] === 1){
          if(count === 1){
            grid[i][j] = 0;
          }
          if(count === 4){
            grid[i][j] = 0;
          }
        }
        if(grid[i][j] === 0){
          if(count === 3){
            grid[i][j] = 1;
          }
        }
}

drawGrid();
refreshGrid();
