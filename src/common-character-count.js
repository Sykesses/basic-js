const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};
  for (let char of s1) {
    count1[char] = (count1[char] || 0) + 1;
  }
  for (let char of s2) {
    count2[char] = (count2[char] || 0) + 1;
  }
  let common = 0;
  for (let char in count1) {
    if (count2[char]) {
      common += Math.min(count1[char], count2[char]);
    } 
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
