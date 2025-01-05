const { NotImplementedError } = require('../extensions/index.js');


function renameFiles(names) {
  const nameQty = {};
	const renamedFiles = [];

	names.forEach((name) => {
		if (nameQty[name]) {
			let newName;
			do {
				newName = `${name}(${nameQty[name]})`;
				nameQty[name]++;
			} while (nameQty[newName]);

			nameQty[newName] = 1;
			renamedFiles.push(newName);
		} else {
			nameQty[name] = 1;
			renamedFiles.push(name);
		}
	});

	return renamedFiles;
}

module.exports = {
  renameFiles
};
