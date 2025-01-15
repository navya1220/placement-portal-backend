const express = require("express");
const router = express.Router();

const  {createJob, getAllJobs, getEachJob, deleteJob, updateJob} = require("../../controllers/adminControllers/adminController");


router.post("/jobs", createJob);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getEachJob);
router.put('/jobs/:id', updateJob);

router.delete('/jobs/:id', deleteJob);


module.exports = router;

