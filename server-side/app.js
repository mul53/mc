var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var apiV1Router = require('./routes/v1');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', apiV1Router);

module.exports = app;
