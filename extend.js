var superClass = function() {};
superClass.prototype.func1 = function() {console.log(1);}
superClass.prototype.func2 = function() {console.log(2);}

var subClass = function() {};
subClass.prototype = Object.create(superClass.prototype);
subClass.prototype.func1 = function() {console.log(11);}

var ins = new subClass();

ins.func1();
ins.func2();
