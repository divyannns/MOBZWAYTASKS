const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const path = require('path');

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

 //const username = process.env.MONGODB_USERNAM
 //const password = process.env.MONGODB_PASSWORD

mongoose.connect('mongodb://localhost:27017/Users', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});
  
// Define the schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNo: { type: String, match: /^\d{10}$/ },
  emailId: { type: String, match: /^\S+@\S+\.\S+$/ },
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
  loginId: { type: String, match: /^[a-zA-Z0-9]{8,}$/ },
  password: { type: String, match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{6,}$/ },
  creationTime: { type: Date, default: Date.now },
  lastUpdatedOn: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// POST endpoint to create a new user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET endpoint to fetch users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
