// We will be outputting JSON (a kind of API Endpoint)
// This will implement the phenomenon of Serialize and Deseraialize Data
// This example will also show routing
// ROUNTING: Mapping HTTP request to content

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index3.html').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/JSON' });

        var obj = {
            firstname: 'Aditya',
            lastname: 'Tyagi'
        };

        res.end(JSON.stringify(obj));

    } else {
        res.writeHead(404);
        res.end();
    }



}).listen(1340, '127.0.0.1');