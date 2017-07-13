var express = require('express')

var app = express();

// This app is listening to port: 3001
var port = process.env.PORT || 3001;

// Using middleware function
app.use('/assets', express.static(__dirname + '/public')); // '/assets' is URL

app.get('/', function(req, res) {
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>First Express Program: Using Middleware</h1></body></html>');
});

// Creating our own middleware
app.use('/my', function(req, res, next) {
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>My Middleware</h1></body></html>');
    next();
});

app.listen(port);