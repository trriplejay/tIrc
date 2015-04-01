var express = require('express');
var app = express();
var logger = require('winston');

app.use(require('body-parser').json({ limit: '10mb' }));
app.use(require('body-parser').urlencoded({ limit: '10mb' }));
app.use(require('cookie-parser')());
app.get('/', function(req, res) {
  res.send('hello world');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  logger.info('Example app listening at http://%s:%s', host, port);
})