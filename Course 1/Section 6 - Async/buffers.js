// buffers

var buf = new Buffer('Hello','utf8');
console.log(buf); // will show hexadecimal values
console.log(buf.toString()); // will convert the hexadecimal to string
console.log(buf.toJSON()); // represents data in JSON format
console.log(buf[2]);

// Now the size of the buffer is fixed -> 5 Characters (because of Hello)
// If we write somethingto buffer now, it will overwrite the "Hello"
buf.write('WO');
console.log(buf.toString()); // will give "WOllo"
 