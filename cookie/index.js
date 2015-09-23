// Setup basic express server
var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

var server = http.createServer(app).listen(5000, function() {
  console.log('Server is listening on 5000');
});
