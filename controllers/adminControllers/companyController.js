const express = require('express');
const Company = require('../../models/admin/company');

const addCompany = async (req, res) => {
    const { name, logo, process, requirements, category, recruitmentLink } = req.body;
  
    try {
      const newCompany = new Company({ name, logo, process, requirements, category, recruitmentLink });
      await newCompany.save();
      res.status(201).json({ message: 'Company added successfully', company: newCompany });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add company' });
    }
  };

 const getAllCompanies = async (req, res) => {
    try {
      const companies = await Company.find();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch companies' });
    }
  };

  const getCompaniesByCategory = async (req, res) => {
    const { category } = req.params;
  
    try {
      const companies = await Company.find({ category });
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch companies by category' });
    }
  };

  

  const updateCompany = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    try {
      const updatedCompany = await Company.findByIdAndUpdate(id, updates, { new: true });
      res.status(200).json({ message: 'Company updated successfully', company: updatedCompany });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update company' });
    }
  };

  
  const deleteCompany = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Company.findByIdAndDelete(id);
      res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete company' });
    }
  };

  
  module.exports  = {
    addCompany,
    getAllCompanies,
    getCompaniesByCategory,
    deleteCompany,
    updateCompany
  }