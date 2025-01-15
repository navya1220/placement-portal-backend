// routes/student.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/student');

const JWT_SECRET = 'your_secret_key'; 


const studentRegister = async (req, res) => {
    const { name, email, rollNo } = req.body;
  
    if (!name || !email || !rollNo) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const existingUser = await Student.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered.' });
      }
  
      const student = new Student({ name, email, rollNo });
      await student.save();
  
      res.status(201).json({ message: 'Student registered successfully.' });
    } catch (error) {
      console.error('Error in student signup:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };
  


const studentLogin =  async (req, res) => {
  const { email, rollNo } = req.body;

  if (!email || !rollNo) {
    return res.status(400).json({ message: 'Email and Roll Number are required.' });
  }

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    if (student.rollNo !== rollNo) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: student._id, email: student.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('Error in student login:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
    studentRegister,
    studentLogin
};
