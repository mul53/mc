var express = require('express');
var logger = require('morgan');
var http = require('http');
var debug = require('debug')('app:server');

var app = express();

var port = process.env.PORT || 3000;

app.set('port', port);

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);
server.on('error', onError);

function onListening() {
  debug('Listening on port ' + app.get('port'));
}

function onError(err) {
  if (err.code === 'EADDRINUSE') {
    process.stdout.write(`Port ${err.port} is already in use.`);
  } else {
    process.stdout.write(err.code);
  }
}
