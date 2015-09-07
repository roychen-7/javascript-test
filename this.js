var a = 3;

/*
var obj = {
	a: 2,
	say: say
};

function say () {
	console.log(this.a);
}
*/

var obj = {
	a: 2,
	say: function() {console.log(this.a);}
}

obj.say();
