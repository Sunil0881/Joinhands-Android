const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  shopName: String,
  ownerName: String,
  category: String,
  indexNumber: String,
  number: String,
  emailId: String,
  Address: String,
  pinCode: String,
  city: String,
  document: String,
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = { Donor };
