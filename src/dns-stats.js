const { NotImplementedError } = require('../extensions/index.js');


function getDNSStats(domains ) {
 const res = {};
 
 domains.forEach(dom => {
  const domParts = dom.split('.').reverse();
  let currentDom = '';

  domParts.forEach(part => {
    currentDom += `.${part}`;
    if (!res[currentDom]) {
      res[currentDom] = 0;
    }
    res[currentDom]++;
  });
 });
 return res;
}

module.exports = {
  getDNSStats
};
