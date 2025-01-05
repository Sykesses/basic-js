const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let resultDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      const currentDepth = this.calculateDepth(arr[i]);
      resultDepth = Math.max(resultDepth, currentDepth + 1); 
    }
    return resultDepth;
  }
}

module.exports = {
  DepthCalculator
};
