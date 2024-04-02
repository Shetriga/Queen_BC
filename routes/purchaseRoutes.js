const express = require("express");
const { authorizedOwnerOrAdmin } = require("../middleware/Authorizations");
const {
  postNewPurchase,
  getAllPurchases,
} = require("../controllers/userControllers");
const { postNewPurchaseValidations } = require("../validations/purchase");
const router = express.Router();

router.get("/all", authorizedOwnerOrAdmin, getAllPurchases);

router.post(
  "/new/purchase",
  authorizedOwnerOrAdmin,
  postNewPurchaseValidations,
  postNewPurchase
);

module.exports = router;
