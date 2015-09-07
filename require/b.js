console.log(module.exports === exports);

exports = {
	a: 1
};

console.log(module.exports === exports);

console.log(exports);
console.log(module.exports);
