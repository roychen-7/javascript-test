// OO
// Abstract
function Person(name, age) {
    this.name = name; 
    this.age = age;
    
    this.sayName = () => { console.log(this.name); }
    this.sayAge = () => { console.log(this.age); }
}

// Multiple inherit
function Man(name, age) {
    Person.call(this, name, age);

    // Poly
    sayName = this.sayName;
    this.sayName = function () {
        sayName.call(this);
        console.log("Poly");
    }
}

var roy = new Man('Roy', 25);
roy.sayName();
roy.sayAge();
