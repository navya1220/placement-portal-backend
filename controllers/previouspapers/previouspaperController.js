const express = require('express');
const CompanyPaper = require('../../models/previouspapers/previouspapers');


const getAllPapers = async (req, res) => {
  try {
    const papers = await CompanyPaper.find();
    res.json(papers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addPapers =  async (req, res) => {
  const paper = new CompanyPaper({
    company: req.body.company,
    year: req.body.year,
    link: req.body.link,
    logo: req.body.logo,
  });

  try {
    const newPaper = await paper.save();
    res.status(201).json(newPaper);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getPaper =  async (req, res) => {
  try {
    await CompanyPaper.findByIdAndDelete(req.params.id);
    res.json({ message: 'Paper deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllPapers,
    getPaper,
    addPapers
};
