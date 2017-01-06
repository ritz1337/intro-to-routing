var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;
var routes = require('./routes');

function log(req) {
  console.log('Incoming ' + req.method + ' request to ' + req.url);
}

var server = http.createServer(function(req, res) {

  log(req);

  var route = routes.find(function(route){
    return route.method === method && route.path === url
  });

  if (!route) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('Not found!');
    return res.end();
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write( route.action() );
  return res.end();
});

server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});
