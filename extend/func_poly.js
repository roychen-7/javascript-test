// OO
function Person(name, age) {
    this.name = name; 
    this.age = age;
    
    this.sayName = () => { console.log(this.name); }
    this.sayAge = () => { console.log(this.age); }
}

function Man(name, age) {
    var _parent = new Person(name, age);

    // Poly
    this.sayName = function () {
        _parent.sayName();
        console.log("Poly");
    }
    
    // Mixin
    for (var key in _parent) {
        if (!this[key]) {
            this[key] = _parent[key];
        }
    }
}

var roy = new Man('Roy', 25);

console.log("ROY==========");
roy.sayName();
roy.sayAge();
