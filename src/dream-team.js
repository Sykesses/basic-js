const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const team = members
    .filter((member) => typeof member === "string")
    .map((member) => member.trim()[0].toUpperCase())
    .sort()
    .join("");
  return team || false;
}

module.exports = {
  createDreamTeam
};
