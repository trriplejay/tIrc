'use strict';
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  phoneNumber: {type: String, required: true},
  phoneVerified: { type: Boolean, default: false },
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()},
  ircNick: String
});

userSchema.index({phoneNumber: 1}, {unique: true});

var UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;