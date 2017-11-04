var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("request was made on " + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});

    var obj = {
        name: 'Gali',
        job: 'Ninja',
        age: 24
    };

    res.end(JSON.stringify(obj));
});

server.listen(3000, "127.0.0.1");
console.log("Listening now.");

