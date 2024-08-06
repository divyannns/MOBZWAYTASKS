const mongoose = require('mongoose');

const isAlphaWithSpaces = (value) => /^[a-zA-Z\s]+$/.test(value);
const isValidStreet = (value) =>
  /^[a-zA-Z0-9\s.,-]+$/.test(value) && /[a-zA-Z]/.test(value);
const isValidMobileNo = (value) => {
  return /^[1-9][0-9]{9}$/.test(value);
};
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    validate: {
      validator: isAlphaWithSpaces,
      message: "First name can only contain alphabetic characters",
    },
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    validate: {
      validator: isAlphaWithSpaces,
      message: "Last name can only contain alphabetic characters and spaces",
    },
  },
  mobileNo: {
    type: String,
    required: [true, "Mobile number is required"],
    validate: {
      validator: isValidMobileNo,
      message:
        "Mobile number must be 10 digits, not start with 0, and not be all zeros",
    },
  },
  email: { type: String, required: true, match: /\S+@\S+\.\S+/ },
  address: {
      street: String,
      city: String,
      state: String,
      country: String,
  },
  loginId: {
    type: String,
    required: [true, "Login ID is required"],
    match: [
      /^[a-zA-Z0-9]{8}$/ ,
      "Login ID must be exactly 8 alphanumeric characters",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be at least 6 characters, include one uppercase letter, one lowercase letter, one number, and one special character",
    ],
  },
  creationTime: { type: Date, default: Date.now },
  lastUpdatedOn: { type: Date, default: Date.now },
});


module.exports = mongoose.model('User', userSchema);
