const express = require("express");
const {
  getCustomers,
  postNewCustomer,
  putCustomer,
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
  authorizedOwnerOrAdmin,
  postNewCustomerValidations,
  postNewCustomer
);

router.put(
  "/:cid",
  authorizedOwnerOrAdmin,
  postNewCustomerValidations,
  putCustomer
);

module.exports = router;
