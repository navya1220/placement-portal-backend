const express = require('express');
const Job = require('../../models/admin/admin')


const createJob =  async (req, res) => {
    try {
      const job = new Job(req.body);
      const savedJob = await job.save();
      res.status(201).json(savedJob);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  

  const getAllJobs =  async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  
  const getEachJob =  async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      res.status(200).json(job);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Update a job
  const updateJob =  async (req, res) => {
    try {
      const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedJob) {
        return res.status(404).json({ error: "Job not found" });
      }
      res.status(200).json(updatedJob);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  
  const deleteJob =  async (req, res) => {
    try {
      const deletedJob = await Job.findByIdAndDelete(req.params.id);
      if (!deletedJob) {
        return res.status(404).json({ error: "Job not found" });
      }
      res.status(200).json({ message: "Job deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

  module.exports = {
   createJob,
   getAllJobs,
   getEachJob,
   deleteJob,
   updateJob
  }