'use strict';

var express = require('express');
var logger = require('winston');
var morgan = require('morgan');
var mongoose = require('mongoose');
var UserModel = require('./app/models/UserModel.js');

var app = express();
global.logger = logger;
global.util = require('util');
logger.debug('about to connect to db');
mongoose.connect(process.env.DB_URL + '/tirc', {}, listen);
app.use(require('body-parser').json({ limit: '10mb' }));
app.get('/', function(req, res) {
  var responseObject = {
    msg: 'Hello World'
  };
  res.status(200).json(responseObject);

});

//Twilio routes


//IRC routes


//USER routes
app.get('/users', require('./app/userEndpoints/getUsers.js'));
app.post('/users', require('./app/userEndpoints/postUser.js'));

function listen(err) {
  var server = app.listen(60000, function() {
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Example app listening at http://%s:%s', host, port);
  });
}