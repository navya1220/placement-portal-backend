// routes/student.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Alumini = require('../models/alumini');

const JWT_SECRET = 'your_secret_key'; 


const aluminiRegister = async (req, res) => {
    const { name, email, rollNo } = req.body;
  
    if (!name || !email || !rollNo) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const existingUser = await Alumini.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered.' });
      }
  
      const alumini = new Alumini({ name, email, rollNo });
      await alumini.save();
  
      res.status(201).json({ message: 'Alumini registered successfully.' });
    } catch (error) {
      console.error('Error in student signup:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };
  


const aluminiLogin =  async (req, res) => {
  const { email, rollNo } = req.body;

  if (!email || !rollNo) {
    return res.status(400).json({ message: 'Email and Roll Number are required.' });
  }

  try {
    const alumini = await Alumini.findOne({ email });
    if (!alumini) {
      return res.status(404).json({ message: 'Alumini not found.' });
    }

    if (alumini.rollNo !== rollNo) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: alumini._id, email: alumini.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('Error in student login:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
    aluminiRegister,
    aluminiLogin
};
