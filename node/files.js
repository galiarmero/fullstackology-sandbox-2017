var fs = require('fs');

// blocking code, sync
fs.readFile('./README.md', 'utf8', function(err, data) {
    fs.writeFile('./WRITEME.MD', data);
});