// models/Employee.js
const mongoose = require('mongoose');

const  studentSchema = new mongoose.Schema({
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

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = Student;