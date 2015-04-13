'use strict';
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  phoneNumber: String,
  phoneVerified: { type: Boolean, default: false }
});

var UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;