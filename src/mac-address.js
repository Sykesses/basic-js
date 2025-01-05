const { NotImplementedError } = require('../extensions/index.js');


function isMAC48Address(n) {
  const isMac = /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/
  return isMac.test(n);
}
module.exports = {
  isMAC48Address
};
