const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  process: { type: String, required: true },
  requirements: { type: String, required: true },
  category: { type: String, enum: ['MNC', 'Middle', 'Startup'], required: true },
  recruitmentLink: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
