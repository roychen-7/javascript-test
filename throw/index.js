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

try {
  throw new typeException('testError', 'Number');
} catch (e) {
  console.log(e);
}

function baseException(message) {
  this.message = message;
}

function typeException(message, type) {
  baseException.call(this, message);
  this.type = type;
}
