const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  resetLink: {
    type: String,
    default: ''
  }
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
