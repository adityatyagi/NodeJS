var express = require('express')
var app = express();

var apiController = require('./controllers/apicontroller');
var htmlController = require('./controllers/htmlcontroller');


app.set('view engine', 'ejs');

var port = process.env.PORT || 3004;



app.use('/assets', express.static(__dirname + '/public')); // style.css

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});


htmlController(app);
apiController(app); // passed by reference


app.listen(port);