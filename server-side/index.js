var express = require('express');
var logger = require('morgan');
var http = require('http');

var connectDB = require('./services/db');

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
  process.stdout.write(`Listening on port ${app.get('port')}. \n`);
  connectDB();
}

function onError(err) {
  if (err.code === 'EADDRINUSE') {
    process.stdout.write(`Port ${err.port} is already in use. \n`);
  } else {
    process.stdout.write(err.code);
  }
}
