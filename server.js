var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.env.PORT || 3000;


function requestHandler(req, res) {
  var root = __dirname + '/public/';
  var fileRequest = req.url || 'index.html';
  fs.exists((root + fileRequest), function(exists) {
    if (exists) {
      fs.readFile(root + 'index.html', function(err, contents) {
        if(!err) {
          res.end(contents);
        } else {
          console.log(err);
        }
      });
    } else {
      res.statusCode = 404;
      res.end('Error: 404 file not found.');
    }
  });
};

var server = http.createServer(requestHandler);
server.listen(port);
console.log('Server running on port: ' + port);
