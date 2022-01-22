const { grey } = require("color-name");

const rows = 10;
const columns = 10;

function setGrid() {
  const grid = Array(rows)
    .fill(0)
    .map(() => Array(columns).fill(0));
  return grid;
}
// eslint-disable-next-line prefer-const
let newGrid = setGrid();

function drawGrid() {
  document.body.style.background = grey;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (newGrid[i][j] === 1) {
        // cambiar recuadro de color
      }
    }
  }
}
