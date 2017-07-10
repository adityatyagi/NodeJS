// This uses the concept of files and fs

var fs = require('fs');

// Scynchronous Call
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); // be very careful with the syntax
console.log(greet);

// Asycnchronous Call -> This will run after console.log('Done!') runs.
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});
// P.S .readFile() doesn't return anything. It just runs asynchronously, that's why
// we did not do console.log(greet2)

console.log('Done!');