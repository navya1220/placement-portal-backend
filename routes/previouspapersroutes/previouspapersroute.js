const express = require("express");
const router = express.Router();

const  {getAllPapers, addPapers, getPaper} = require("../../controllers/previouspapers/previouspaperController");


router.post("/paper", addPapers);
router.get("/paper", getAllPapers);
router.get("/paper/:id", getPaper);


module.exports = router;

