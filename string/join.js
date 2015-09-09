// array join
var arr = [];

for (var i = 0; i < 1000000; i++) {
    arr[i] = "String";
}

var d1 = new Date();  

var str = arr.join("");  

var d2 = new Date();

console.log("array join 100w: " + (d2.getTime() - d1.getTime()) + "ms");

// string join
var str = '';

var d1 = new Date();  

for (var i = 0; i < 1000000; i++) {
    str += "string";
}

var d2 = new Date();


console.log("String join 100w: " + (d2.getTime() - d1.getTime()) + "ms");
