var express = require('express')
var app = express();

var mongoose = require('mongoose')

mongoose.connect('mongodb://test:test@ds157712.mlab.com:57712/testapp');

var port = process.env.PORT || 3001;

app.set('view engine', 'ejs');

var schema = mongoose.Schema; // Schema is a class

var personSchema = new schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);


// Create Person
var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: 'Ramesh Nagar'
});

// Save Person
john.save(function(err) {
    if (err) throw err;
    console.log('Person Saved');
});


// Create second person
var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: 'Moti Nagar'
});

// Save Person
jane.save(function(err) {
    if (err) throw err;
    console.log('Person saved');
})


app.use('/', function(req, res, next) {
    console.log('Request URL ' + req.url);

    // get all the users
    Person.find({}, function(err, users) { // {query}, but with {}, We are asking for all the users
        if (err) throw err;

        // object of all the users
        console.log(users);
    });

    next();
});

app.listen(port);