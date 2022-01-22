function setGrid(rows, columns) {
  const grid = Array(rows).fill(Array(columns).fill(0));
  return grid;
}
const newGrid = setGrid(5, 10);
newGrid[2][3] = "something";
console.table(newGrid);
