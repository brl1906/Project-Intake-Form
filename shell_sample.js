//test shell for setting up app with node.js after installing package.json and express

//import express framework & initialize to variable app
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Build or Call Intake App Here');
});

//setting up how the app will connect with server
//defines the handler or handling method for a get request for information  also starts server
var port = Number(process.env.PORT || 5000);
app.listen(port,function() {
  console.log('Listening on ' + port);
});
