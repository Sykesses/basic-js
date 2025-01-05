const { NotImplementedError } = require('../extensions/index.js');


function transform(arr) {
  if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}

	let result = [];
	let i = 0;

	while (i < arr.length) {
		switch (arr[i]) {
			case "--discard-prev":
				if (i !== 0 && arr[i - 2] !== "--discard-next") {
					result.pop();
				}
				break;
			case "--discard-next":
				i++;
				break;
			case "--double-next":
				if (i < arr.length - 1) {
					result.push(arr[i + 1]);
				}
				break;
			case "--double-prev":
				if (i !== 0 && arr[i - 2] !== "--discard-next") {
					result.push(arr[i - 1]);
				}
				break;
			default:
				result.push(arr[i]);
		}
		i++;
	}
	return result;
}

module.exports = {
  transform
};
