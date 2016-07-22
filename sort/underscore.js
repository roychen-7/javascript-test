var obj = {a: 4, b: 3, c: 5};
var _ = require('underscore');

// console.log(_.toArray(_.invert(obj)).reverse());

var arrObj = {};
for (var i in obj) {
  arrObj[obj[i]] = i;
}

Array.prototype.slice.call(arrObj);
console.log(arrObj);
// console.log(arrObj.reverse());
