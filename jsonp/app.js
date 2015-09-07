var express = require("express");
var http = require("http");

var app1 = express();
var app2 = express();

app1.get("/", function(req, res) {
    res.sendfile("index.html");
});

app1.listen(3000);
app2.listen(3001);
