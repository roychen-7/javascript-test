function test () {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
}

test(1, 2, [3, 4], {name: 'Roy', age: 25});

// ES6 Array.from
