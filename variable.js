function fn1() {
	var count = 0;

	return function fn2() {
		return function() {
			return ++count;
		}
	}
}

a = fn1();
var c = a();
c();
console.log(c());
