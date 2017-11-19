const express = require('express');
const app = express();

// Build Your Route Here
app.get('/', function(req, resp) {
  resp.send(`Hello, World!`);
});

module.exports = app;
