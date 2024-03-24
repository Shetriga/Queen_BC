const express = require("express");
const {
  getCustomers,
  postNewCustomer,
} = require("../controllers/userControllers");
const { postNewCustomerValidations } = require("../validations/customer");
const { authorizedAdmin } = require("../middleware/Authorizations");
const router = express.Router();

router.get("/", authorizedAdmin, getCustomers);

router.post("/new/customer", postNewCustomerValidations, postNewCustomer);

module.exports = router;
