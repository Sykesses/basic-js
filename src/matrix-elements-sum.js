const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  let summa = 0;
  for (let column = 0; column < matrix[0].length; column++) {
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][column] === 0) {
        break;
      }
      summa += matrix[row][column];
    }
  }
  return summa;
}

module.exports = {
  getMatrixElementsSum
};
