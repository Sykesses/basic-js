const { NotImplementedError } = require('../extensions/index.js');


function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(columns).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (matrix[row][col]) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (row + i >= 0 && row + i < rows && col + j >= 0 && col + j < columns) {
              if (i !== 0 || j !== 0) {
                result[row + i][col + j]++;
              }
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
