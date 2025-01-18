const express = require('express');
const router = express.Router();
const {
  getAllCompanies,
  getCompaniesByCategory,
  addCompany,
  updateCompany,
  deleteCompany
} = require('../../controllers/adminControllers/companyController');


router.get('/company', getAllCompanies); 
router.get('/company/category/:category', getCompaniesByCategory); 
router.post('/company', addCompany); 
router.put('/company/:id', updateCompany); 
router.delete('/company/:id', deleteCompany); 

module.exports = router;
