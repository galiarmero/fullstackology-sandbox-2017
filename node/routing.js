var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log("request was made on " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.url == "/home" || req.url == "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    }
    else if (req.url == "/api") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var player = {
            name: 'Lonzo Ball',
            age: 20,
            jerseyNumber: 2,
        };
        res.end(JSON.stringify(player));
    }
    else {
        res.end("404 yo");
    }
});

server.listen(3000, "127.0.0.1");
console.log("Listening now.");

