/* 

This is to showcase the use of:
1. Streams
2. Pipes
3. Compressing files
4. Copying files

*/

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/pipeText.txt', 'utf8'); //read-only stream

var writabable = fs.createWriteStream(__dirname + '/pipeTextCopy.txt'); // write-only stream

var compressed = fs.createWriteStream(__dirname + '/pipe.txt.gz');

var gzip = zlib.createGzip(); // creates duples/transform stream ->> read/write stream

//copy-paste
readable.pipe(writabable);

//copying and compressing file -> pipe.txt.gz
readable.pipe(gzip).pipe(compressed);