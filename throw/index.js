try {
  throw 1;
} catch (e) {
  console.log(e);
}

try {
  throw 'abc';
} catch (e) {
  console.log(e);
}

try {
  throw new Date();
} catch (e) {
  console.log(e);
}

var util = require('util');

try {
  throw new typeException(100010, '%s is an unexpected type', 'Number');
} catch (e) {
  console.log(e);
}

function baseException(code, message) {
  this.code = code;
  this.message = message;
}

function typeException(code, message, type) {
  baseException.call(this, code, message);
  this.message = util.format(message, type);
  this.type = type;
}
