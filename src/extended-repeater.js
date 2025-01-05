const { NotImplementedError } = require('../extensions/index.js');


function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : (options.addition === null ? 'null' : String(options.addition));
  const additionRepeatTimes= options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const repeatedAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const baseStr = str === null || str === undefined ? 'null' : String(str);
  const repeatedStr = new Array(repeatTimes).fill(baseStr + repeatedAddition).join(separator);
  return repeatedStr;
}

module.exports = {
  repeater
};
