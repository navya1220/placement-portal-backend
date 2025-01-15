const express = require("express");
const router = express.Router();

const {AdminRegister, AdminLogin, getAdminDetails} = require('../controllers/adminLoginController')


router.post("/adminRegister", AdminRegister);
router.post("/adminLogin", AdminLogin);
router.get("/adminDetails/:id", getAdminDetails);


module.exports = router;
