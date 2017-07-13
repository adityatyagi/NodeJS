var express = require('express')
var app = express();

var port = process.env.PORT || 3000; // PORT is an environment variable
// and if PORT information is not defined, it will take 3000

// GET method: used only to get the information and not change the information on the database
app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>First Express Program</h1></body></html>');
});


// responding with the JSON data, but inside .json(obj literal)
app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

//node is listening to port 3000 || port
app.listen(port);