'use strict'

module.exports = function getLoveTrianglesCount(preferences = []) {
	let counter = 0;
	for (let i = 0; i < preferences.length; i++){
		let a = preferences[i];
		let b = preferences[a-1];
		let c = preferences[b-1];
		if (a == preferences[a-1] || b == preferences[b-1] || c == preferences[c-1]) continue;
		if (c == i+1) {
			counter++;
		}
	}
	return counter / 3;
};

