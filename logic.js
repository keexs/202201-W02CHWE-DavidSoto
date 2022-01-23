// eslint-disable-next-line import/no-extraneous-dependencies
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

// eslint-disable-next-line no-unused-vars
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
