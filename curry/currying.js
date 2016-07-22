function add(n) {
	return (num) => {
		return n + num;
	}
}

var add5 = add(5);

console.log(add5(10));
