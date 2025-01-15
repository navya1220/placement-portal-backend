const express = require("express");
const router = express.Router();

const  { aluminiRegister, aluminiLogin} = require("../controllers/aluminiController")


router.post("/aluminiRegister", aluminiRegister);
router.post("/aluminiLogin", aluminiLogin);


module.exports = router;
