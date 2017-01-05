var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(request, response) {
  var method = request.method;
  var url = request.url;
  // GET /random => a number between 1 and 10
  if (method === 'GET' && url === '/random') {
    var randomNumber = Math.floor( Math.random() * 10);
    response.setHeader('Content-Type', 'text/plain');
    response.write('You get ' + randomNumber);
    // if using function shake:
    // response.write('You get ' + shake());
    response.end();
  }
    else if (method === 'GET' && url === '/eightball') {
      var randomNumber = Math.round( Math.random() * 2);
      console.log(randomNumber)
      var eightball = ["Yes", "No", "Maybe"];
      response.statusCode = 200;
      response.write('Magic Eightball Says ' + eightball[randomNumber]);
      response.end();
    }
      else {
      response.statusCode = 404;
      response.write('uhho');
      response.end();
    }

});

server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});

// Magic Eightball as a function instead of hardcode - see line 15 & 16
// function shake() {
//   var answers = ['yes, 'no', 'maybe'];
//   var index = Math.floor( Math.random() * answers.length);
//   return answers[index];
// }
