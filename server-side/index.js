var http = require('http');

var app = require('./app');
var connectDB = require('./services/db');

var port = process.env.PORT || 3000;
app.set('port', port);

connectDB();

var server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);
server.on('error', onError);

function onListening() {
  process.stdout.write(`Listening on port ${app.get('port')}. \n`);
}

function onError(err) {
  if (err.code === 'EADDRINUSE') {
    process.stdout.write(`Port ${err.port} is already in use. \n`);
  } else {
    process.stdout.write(err.code);
  }
}
