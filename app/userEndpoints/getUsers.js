'use strict'

var self = getUsers;

module.exports = self;

var UserModel = require('../models/UserModel.js');

function getUsers(req, res) {
  logger.info('GETting users');

  var query = {

  };

  UserModel.find(query, function (err, users) {
    if (err) {
      var errObj = {
        msg: 'error occured during ' + self.name
      };
      return res.status(500).json(errObj);
    }
    res.status(200).json(users);
  });
}