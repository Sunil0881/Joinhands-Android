const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://manikandan05082003:Manicdon07%40@cluster0.scriurb.mongodb.net/joinhands', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: 'User already exists', user: existingUser });
    }

    // If the user doesn't exist, create a new user
    const newUser = new User({ email });
    await newUser.save();

    res.json({ message: 'Email registered successfully', user: newUser });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/signup_pass', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Hash the provided password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the existing user document with the hashed password
    const updatedUser = await User.findOneAndUpdate({ email }, { $set: { password: hashedPassword } }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Password updated successfully for the user.', user: updatedUser });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Check if the user exists in the database
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (passwordMatch) {
      res.json({ message: 'Login successful', user: existingUser });
    } else {
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
