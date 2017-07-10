// buffers

var buf = new Buffer('Hello', 'utf8');
console.log(buf); // will show hexadecimal values
console.log(buf.toString()); // will convert the hexadecimal to string
console.log(buf.toJSON()); // represents data in JSON format
console.log(buf[2]);

// Now the size of the buffer is fixed -> 5 Characters (because of Hello)
// If we write somethingto buffer now, it will overwrite the "Hello"
buf.write('WO');
console.log(buf.toString()); // will give "WOllo"



// Buffer came into existence because JavaScript wasnt able to handle binary data. But with
// ES6, JavaScript is able to handle Binary Data by transferring it to an Array.
// This functinality is given by V8 engine.

var buffer = new ArrayBuffer(8); //
var view = new Int32Array(buffer); // view is an array which keeps all the data of buffer
view[0] = 5;
view[1] = 10;
view[2] = 20; // the size of the buffer is 64 bits, and it can take 2 numbers only.
console.log(view);