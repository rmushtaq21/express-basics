'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Request received');
});

app.listen(3001);