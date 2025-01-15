const express = require('express');
const Alumni = require('../../models/aluminidata/aluminidata');

const getAlumini = async (req, res) => {
  try {
    const alumniStories = await Alumni.find();
    res.json(alumniStories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch alumni stories' });
  }
};


const createAlumini = async (req, res) => {
  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    res.status(201).json(alumni);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create alumni story' });
  }
};


const updateAlumini = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedAlumni = await Alumni.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedAlumni) {
      return res.status(404).json({ error: 'Alumni story not found' });
    }

    res.json(updatedAlumni);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update alumni story' });
  }
};

const deleteAlumini = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAlumni = await Alumni.findByIdAndDelete(id);

    if (!deletedAlumni) {
      return res.status(404).json({ error: 'Alumni story not found' });
    }

    res.json({ message: 'Alumni story deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete alumni story' });
  }
};

module.exports = {
  getAlumini,
  createAlumini,
  updateAlumini,
  deleteAlumini,
};
