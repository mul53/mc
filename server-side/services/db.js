var mongoose = require('mongoose');
var chalk = require('chalk');
var log = console.log;

var { DB_URI, } = require('../util/constants');

var URI = process.env.MONGODB_URI || DB_URI;

var connectDB = function() {
  return mongoose.connect(URI, {
    useNewUrlParser: true,
  });
};

mongoose.connection.on('connected', function() {
  log(chalk.cyan(`Mongoose connected to ${URI}`));
});

mongoose.connection.on('error', function(error) {
  log(chalk.red(`Mongoose connection error ${error}`));
});

mongoose.connection.on('disconnect', function() {
  log(chalk.red(`Mongoose disconnected`));
});

module.exports = connectDB;
