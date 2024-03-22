const express = require("express");
const {
  getCustomers,
  postNewCustomer,
} = require("../controllers/userControllers");
const { postNewCustomerValidations } = require("../validations/customer");
const router = express.Router();

router.route("/", getCustomers);

router.post("/new/customer", postNewCustomerValidations, postNewCustomer);

module.exports = router;
