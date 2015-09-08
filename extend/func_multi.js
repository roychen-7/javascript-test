// OO
// Abstract
function Person(name) {
    this.name = name; 
    this.sayName = () => { console.log(this.name); }
}

function Animal(age) {
    this.age = age;
    this.sayAge = () => { console.log(this.age); }
}

// Multiple inherit
function Man(name, age) {
    Person.call(this, name);
    Animal.call(this, age);
}

var roy = new Man('Roy', 25);
roy.sayName();
roy.sayAge();
