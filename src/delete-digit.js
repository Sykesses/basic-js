const { NotImplementedError } = require('../extensions/index.js');


function deleteDigit(n) {
 const NtoS = n.toString();
 let max = -Infinity;
 for (let i = 0; i < NtoS.length; i++) {
  const newN = parseInt(NtoS.slice(0, i) + NtoS.slice(i + 1), 10);
  max = Math.max(max, newN);
 }
 return max;
}

module.exports = {
  deleteDigit
};
