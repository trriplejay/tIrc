var express = require('express');
var app = express();
var logger = require('winston');
var morgan = require('morgan');
var mongoose = require('mongoose');
var UserModel = require('./app/models/UserModel.js');

mongoose.connect(process.env.DB_URL + '/tirc', {}, listen);
app.use(require('body-parser').json({ limit: '10mb' }));
app.use(require('cookie-parser')());
app.get('/', function(req, res) {
  UserModel.update({phoneNumber: '5202046430'}, function(err) {

    if (err)
      logger.error('couldnt insert myself');
    res.send('hello world');
  });
});

function listen(err) {
  var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Example app listening at http://%s:%s', host, port);
  });
}