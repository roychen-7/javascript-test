var event = require("events");

var e = new event.EventEmitter();

e
.on("a", function() {
	console.log("a1");
})
.on("a", function() {
	console.log("a2");
})
.on("b", function() {
	console.log(2);
});

e.emit("a");

console.log(e);
