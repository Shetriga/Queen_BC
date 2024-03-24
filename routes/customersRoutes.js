const express = require("express");
const {
  getCustomers,
  postNewCustomer,
} = require("../controllers/userControllers");
const { postNewCustomerValidations } = require("../validations/customer");
const {
  authorizedAdmin,
  authorizedOwnerOrAdmin,
  authorizedOwner,
} = require("../middleware/Authorizations");
const router = express.Router();

router.get("/", authorizedOwnerOrAdmin, getCustomers);

router.post(
  "/new/customer",
  authorizedOwner,
  postNewCustomerValidations,
  postNewCustomer
);

module.exports = router;
