var express = require('express');
var app = express();

// Build Your Route Here
app.get('/', function(req, resp) {
  console.log(req);
  console.log(req);

  resp.send(`Hellow, World! <p>${req}</p> <p>${resp}</p>`);
});

module.exports = app;

class Request {}

class Response {}
