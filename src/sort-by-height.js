const { validate } = require('uuid');
const { NotImplementedError } = require('../extensions/index.js');


function sortByHeight(arr) {
  const sortArr = arr.filter((value) => value !== -1).sort((a,b) => a - b);
  return arr.map((value) => (value === -1 ? -1 : sortArr.shift()));
}

module.exports = {
  sortByHeight
};
