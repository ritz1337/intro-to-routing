var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var routes = [
  { method: 'GET', path: '/', content: 'Hello'},
  { method: 'GET', path: '/kittens', content: 'Meow'},
];

var server = http.createServer(function(request, response) {
  var method = request.method;
  var url = request.url;
  console.log('Incoming ' + method + ' request' + ' to ' + url);
  var action = routes.find(function(route) {
    return route.method === method && route.path === url
  });
  if (action) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write(action.content);
  }
  else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.write('uhho');
  }
  response.end();
});

server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});
