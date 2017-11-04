var http = require('http');
var fs = require('fs');



// var readStream = fs.createReadStream('./lorem_ipsum.txt');
// var writeStream = fs.createWriteStream('./write_stream_file.txt');

/**
  * readStream.on('data', function(chunk) {
  *     console.log('new chunk received: ');
  *     writeStream.write(chunk, 'utf8')
  * });
  */

// does the same thing as above
// readStream.pipe(writeStream);

var server = http.createServer(function(req, res) {
    console.log("request was made on " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var readStream = fs.createReadStream('./lorem_ipsum.txt');
    readStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("Listening now.");

