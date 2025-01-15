const mongoose = require('mongoose');

const AlumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  story: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Alumni', AlumniSchema);

