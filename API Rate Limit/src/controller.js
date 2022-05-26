var express = require('express');
var app = express(); 
  
app.get('/', function (req, res) {
  console.log(req.ip);
  res.send(req.ip);
});

module.exports = app;