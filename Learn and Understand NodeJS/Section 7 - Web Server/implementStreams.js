var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    //res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.createReadStream(__dirname + '/index2.html').pipe(res);

}).listen(1339, '127.0.0.1');