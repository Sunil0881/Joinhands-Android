const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  email: String,
  ngoName: String,
  ownerName: String,
  category: String,
  indexNumber: String,
  number: String,
  emailId: String,
  Address: String,
  pinCode: String,
  city: String,
  document: String,
  password: String,
});

const Ngo = mongoose.model('Ngo', ngoSchema);

module.exports = { Ngo };
