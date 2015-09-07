var a = {
	exports: {
		name: 'roy',
		age: 25
	}
};

bExports = a.exports;

console.log(bExports);
bExports = 1;
console.log(a.exports);
