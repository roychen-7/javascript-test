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
