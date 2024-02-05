const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Ngo } = require('../Backend/models/ngoSchema');
const {Donor} = require('../Backend/models/donorSchema');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());      
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://manikandan05082003:Manicdon07%40@cluster0.scriurb.mongodb.net/joinhands', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  emailId: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { emailId } = req.body;

  try {
    if (!emailId) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    // Check if the email exists in the Ngo documents
    let existingNgo = await Ngo.findOne({ emailId });

    // If not found in Ngo, check in Donor documents
    if (!existingNgo) {
      existingNgo = await Donor.findOne({ emailId });
    }

    if (existingNgo) {
      // If the email is found in Ngo or Donor, you might want to handle this case accordingly.
      return res.json({ message: 'User already exists in Ngo or Donor', user: existingNgo });
    }

    // If the email is not found in Ngo or Donor, you might want to handle this case accordingly.
    return res.status(404).json({ error: 'Email not found in Ngo or Donor' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/signup_pass', async (req, res) => {
  const { emailId, password } = req.body;

  try {
    console.log('Received request with emailId:', emailId);

    if (!emailId || !password) {
      return res.status(400).json({ error: 'emailId and password are required.' });
    }

    // Hash the provided password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Check if the user exists in NGO
    let existingNgo = await Ngo.findOne({ emailId });

    if (existingNgo) {
      // Update the NGO document with the hashed password
      existingNgo.password = hashedPassword;
      await existingNgo.save();
      return res.json({ message: 'Password updated successfully for the NGO.', user: existingNgo });
    }

    // If not found in NGO, check in Donor
    let existingDonor = await Donor.findOne({ emailId });

    if (existingDonor) {
      // Update the Donor document with the hashed password
      existingDonor.password = hashedPassword;
      await existingDonor.save();
      return res.json({ message: 'Password updated successfully for the Donor.', user: existingDonor });
    }

    // If user not found, handle the case accordingly (e.g., return an error)
    return res.status(404).json({ error: 'User not found' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





app.post('/login', async (req, res) => {
  const { emailId, password } = req.body;

  try {
    if (!emailId || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    console.log('Checking emailId:', emailId);

    // Check if the emailId exists in the Ngo documents
    let existingUser = await Ngo.findOne({ emailId });

    console.log('Ngo Check Result:', existingUser);

    // If not found in Ngo, check in Donor documents
    if (!existingUser) {
      existingUser = await Donor.findOne({ emailId });
      console.log('Donor Check Result:', existingUser);
    }

    if (!existingUser) {
      return res.status(404).json({ error: 'Email not found' });
    }

    // Update the user's password with the entered password
    const hashedPassword = await bcrypt.hash(password, 10);
    existingUser.password = hashedPassword;

    // Save the updated user document to the database
    await existingUser.save();

    res.json({ message: 'Password updated successfully for the user.', user: existingUser });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/ngoregistration', async (req, res) => {
  try {
    const { ngoName, ownerName, category, indexNumber, number, emailId } = req.body;

    if (!ngoName || !ownerName || !category || !indexNumber || !number || !emailId) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if the email or mobile number is already registered
    const existingEmail = await Ngo.findOne({ emailId });
    const existingMobileNumber = await Ngo.findOne({ number });

    if (existingEmail || existingMobileNumber) {
      return res.status(400).json({ error: 'Email or mobile number already in use.' });
    }

    // Create a new Ngo document
    const newNgo = new Ngo({
      ngoName,
      ownerName,
      category,
      indexNumber,
      number,
      emailId,
    });

    // Save the Ngo document to the database
    await newNgo.save();

    res.json({ message: 'NGO registered successfully', ngo: newNgo });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/updateNgoDetails', async (req, res) => {
  const { ngoName, ownerName, category, indexNumber, number, emailId, Address, pinCode, city, document } = req.body;

  try {
    if (!ngoName || !ownerName || !category || !indexNumber || !number || !emailId || !Address || !pinCode || !city || !document) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Find the Ngo document by emailId
    const existingNgo = await Ngo.findOne({ emailId });

    if (!existingNgo) {
      return res.status(404).json({ error: 'NGO not found' });
    }

    // Update the existing Ngo document with the new details
    existingNgo.ngoName = ngoName;
    existingNgo.ownerName = ownerName;
    existingNgo.category = category;
    existingNgo.indexNumber = indexNumber;
    existingNgo.number = number;
    existingNgo.emailId = emailId;
    existingNgo.Address = Address;
    existingNgo.pinCode = pinCode;
    existingNgo.city = city;
    existingNgo.document = document;

    // Save the updated Ngo document to the database
    await existingNgo.save();

    res.json({ message: 'NGO details updated successfully', ngo: existingNgo });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/donorRegistration', async (req, res) => {
  const {
    shopName,
    ownerName,
    category,
    indexNumber,
    number,
    emailId
  } = req.body;

  try {
    if (!shopName || !ownerName || !category || !indexNumber || !number || !emailId) {
      console.log(res.status);
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const existingEmail = await Donor.findOne({ emailId });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    const existingMobileNumber = await Donor.findOne({ number });
    if (existingMobileNumber) {
      return res.status(400).json({ error: 'Mobile number already in use.' });
    }

    const newDonor = new Donor({
      shopName,
      ownerName,
      category,
      indexNumber,
      number,
      emailId
    });

    await newDonor.save();

    res.json({ message: 'Donor registered successfully', donor: newDonor });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Donor Details Update
app.post('/updateDonorDetails', async (req, res) => {
  const { shopName, ownerName, category, indexNumber, number, emailId, Address, pinCode, city, document } = req.body;

  try {
    if (!shopName || !ownerName || !category || !indexNumber || !number || !emailId || !Address || !pinCode || !city || !document) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const existingDonor = await Donor.findOne({ emailId });

    if (!existingDonor) {
      return res.status(404).json({ error: 'Donor not found' });
    }

    existingDonor.shopName = shopName;
    existingDonor.ownerName = ownerName;
    existingDonor.category = category;
    existingDonor.indexNumber = indexNumber;
    existingDonor.number = number;
    existingDonor.emailId = emailId;
    existingDonor.Address = Address;
    existingDonor.pinCode = pinCode;
    existingDonor.city = city;
    existingDonor.document = document;

    await existingDonor.save();

    res.json({ message: 'Donor details updated successfully', donor: existingDonor });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
