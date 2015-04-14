'use strict'

var self = postUser

module.exports = self

var UserModel = require('../models/UserModel.js');

function postUser(req, res) {
  logger.info('POSTing new user');
  if (!checkBodyParams) {
    var errorObj = {
      msg: 'missing parameters',
      module: self.name
    };
    return res.json(500, errorObj);
  }

  var newUser = {
    phoneNumber: req.body.phoneNumber,
    ircNick: req.body.ircNick,
  };

  UserModel.create(newUser, function (err, result) {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });

  function checkBodyParams() {
    var params = req.body;
    return (
      params.phoneNumber &&
      params.ircNick
      );
  }
}