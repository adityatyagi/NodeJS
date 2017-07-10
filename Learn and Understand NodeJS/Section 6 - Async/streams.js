// With the help of streams, we will copy a text file.
// Streams are best used with files

// If there is already Text in greetcopy.txt, then delete  it all and then run streams.js

var fs = require('fs');

// making the "readable stream"
// fs.createReadStream = function(path,options)
// options is an object which specifies how the data is read

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 16 * 1024
});



// making the "writeable stream"
var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');



// "readable" inherits from "Stream", which further inherits from "EventEmiiter"
// Therefore, readable inherits from EventEmitter indirectly
readable.on('data', function(chunk) {
    console.log(chunk); // console.log(chunk.length)  to see how many the event happens and listner is invoked
    writeable.write(chunk); //pastes the entire text of greet.txt into greetcopy.txt
});