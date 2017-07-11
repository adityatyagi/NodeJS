var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    var html = fs.readFileSync(__dirname + '/index1.html', 'utf8');
    var message = 'Hello World';
    html = html.replace('{Message}', message);
    res.end(html);
}).listen(1338, '127.0.0.1');

// But this is a synchronous way to respond, which will create problems when there
// are alot of users and the file is size is alos large.
// Therefore, always try to search a way to implement the Streams.
// Streams increase the perfromance