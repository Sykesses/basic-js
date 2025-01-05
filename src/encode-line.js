const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  let resStr = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      resStr += count > 1 ? count + str[i] : str[i];
      count = 1;
    }
  }
  return resStr;
}

module.exports = {
  encodeLine
};
