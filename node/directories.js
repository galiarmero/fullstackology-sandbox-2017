var fs = require('fs');

fs.mkdir('stuff', function() {
    fs.readFile('README.md', 'utf8', function(err, data) {
        if (!err) {
            fs.writeFile('./stuff/WRITEME.md', data, function(err) {
                if (!err) {
                    fs.unlink('./stuff/WRITEME.md');
                    fs.rmdir('stuff');
                }
            });
        }
    });
});