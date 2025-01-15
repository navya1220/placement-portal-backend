const express = require("express");
const router = express.Router();

const  {createAlumini, getAlumini, updateAlumini, deleteAlumini} = require("../../controllers/aluminiControllers/aluminiControllers");


router.post("/alumini", createAlumini);
router.get("/alumini", getAlumini);
router.put('/alumini/:id', updateAlumini);

router.delete('/alumini/:id', deleteAlumini);


module.exports = router;

