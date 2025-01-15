const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, default: "Not specified" },
  type: { type: String, enum: ["Full-time", "Part-time", "Contract"], required: true },
  description: { type: String, required: true },
  requirements: { type: [String], default: [] },
  technologies: { type: [String], default: [] },
  experience: { type: String, required: true },
  postedDate: { type: Date, default: Date.now },
  companyLogo: { type: String, default: "" },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
