const express = require("express");
const router = express.Router();

const  { studentRegister, studentLogin, getStudents} = require("../controllers/studentController")


router.post("/studentRegister", studentRegister);
router.post("/studentLogin", studentLogin);
router.get("/studentLogin", getStudents);


module.exports = router;
