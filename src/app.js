'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();
var port = 3001;

app.get('/', function(req, res){
	res.send("<h1>I Love Treehouse!</h1>");
});

app.get('/blog', function(req, res) {
  res.send(posts);
});

app.listen(port, function(){
	console.log('The frontend server is running on port: ', port);
});