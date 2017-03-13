'use strict';

var express = require('express');

var app = express();

var port = 3001;

app.get('/', function(req, res) {
  res.send('<h1> Express JS </h1>');
});

app.get('/blog', function(req, res) {
  res.send('route added');
})

app.listen(port, function() {
  console.log('listening on port: ', port);
});