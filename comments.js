// Create web server

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// Open terminal, type node comments.js
// Open browser, go to http://localhost:8080
// You should see the content of index.html
// To stop the server, press Ctrl+C in terminal