var a = {
	A: 1
};

Object.defineProperty(a, 'A', {
	get: function() {
		console.log(111);
		return 1;
}});

console.log(a.A);
