/*
Using EJS

"E" is for "effective." 
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 
No religiousness about how to organize things. No reinvention of iteration and control-flow. 
It's just plain JavaScript.
*/

var express = require('express')

var app = express();

// This app is listening to port: 3002
var port = process.env.PORT || 3002;

app.set('view engine', 'ejs'); // ejs is the extention here

app.get('/', function(req, res) {
    res.render('index'); // will look for index.ejs
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id }) // will look for person.ejs
})

// // Using middleware function
// app.use('/assets', express.static(__dirname + '/public')); // '/assets' is URL

// app.get('/', function(req, res) {
//     res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>First Express Program: Using Middleware</h1></body></html>');
// });

// // Creating our own middleware
// app.use('/my', function(req, res, next) {
//     res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>My Middleware</h1></body></html>');
//     next();
// });

app.listen(port);