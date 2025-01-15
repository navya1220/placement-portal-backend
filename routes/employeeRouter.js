const express = require("express");
const router = express.Router();

const {register, login, getDetails} = require('../controllers/employeeController')


router.post("/register", register);
router.post("/login", login);
router.get("/details/:id", getDetails);


module.exports = router;
