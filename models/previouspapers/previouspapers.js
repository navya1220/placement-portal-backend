const mongoose = require('mongoose');

const CompanyPaperSchema = new mongoose.Schema({
  company: { type: String, required: true },
  year: { type: Number, required: true },
  link: { type: String, required: true },
  logo: { type: String, required: true },
});

module.exports = mongoose.model('CompanyPaper', CompanyPaperSchema);
