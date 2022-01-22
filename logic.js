const rows = 10;
const colums = 10;
const newGrid = [];

function grid() {
  for (let i = 0; i < rows; i++) {
    newGrid[i] = i;
    for (let j = 0; j < colums; j++) {
      newGrid[i][j] = j;
    }
  }
  return newGrid;
}

grid();
newGrid.fill(0);
newGrid[2] = 2;
console.log(newGrid);
