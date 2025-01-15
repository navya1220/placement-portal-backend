// models/Employee.js
const mongoose = require('mongoose');

const  aluminiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  rollNo: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Alumini = mongoose.models.Alumini || mongoose.model('Alumini', aluminiSchema);

module.exports = Alumini;