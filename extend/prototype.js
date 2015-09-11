// Prototype
// Object Create
console.log("Object Create===============");
gen(function(superClass, subClass) {
    subClass.prototype = Object.create(superClass.prototype);
});

// New
console.log("New===============");
gen(function(superClass, subClass) {
    subClass.prototype = new superClass;
});

function gen (inheritFunc) {
    // Define super Class
    var superClass = function() { this.super = 'super'; };
    superClass.prototype.func1 = function() {console.log(1);}
    superClass.prototype.func2 = function() {console.log(2);}
    superClass.prototype.attrSuper = 'attrSuper';

    // Define sub Class
    var subClass = function() { this.sub = 'sub' };
    subClass.prototype.func1 = function() {console.log(11);}
    inheritFunc(superClass, subClass);
    
    // Tester
    var ins = new subClass();

    ins.func1();
    ins.func2();
    
    console.log('attr super: ' + ins.attrSuper);
    console.log('super: ' + ins.super);
    console.log('sub: ' + ins.sub);
}

// Object.create 的做法只针对 Super Class的原型，而不会调用到Super Class的构造方法，所以Super Class内部的this不会生效。
