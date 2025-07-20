const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  cv: {
    type: String, // could be a URL or filename if you're storing/uploading files
    trim: true
  },
  role: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ContactForm', ContactFormSchema);
