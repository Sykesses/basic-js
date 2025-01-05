const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let count = 0;
  for (let row of matrix) {
    for (let cat of row) {
      if (cat === "^^"){
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
