const express = require("express");
const router = express.Router();

const  { studentRegister, studentLogin} = require("../controllers/studentController")


router.post("/studentRegister", studentRegister);
router.post("/studentLogin", studentLogin);
router.get("/studentLogin", studentLogin);


module.exports = router;
