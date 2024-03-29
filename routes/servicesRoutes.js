const express = require("express");
const {
  getAllServices,
  postNewService,
  deleteService,
  postServiceSale,
} = require("../controllers/userControllers");
const {
  postNewServiceValidations,
  postServiceSaleValidations,
} = require("../validations/service");
const {
  authorizedOwner,
  authorizedOwnerOrAdmin,
} = require("../middleware/Authorizations");
const router = express.Router();

router.get("/", authorizedOwnerOrAdmin, getAllServices);

router.post(
  "/new/service",
  authorizedOwner,
  postNewServiceValidations,
  postNewService
);

router.delete("/:sid", authorizedOwner, deleteService);

router.post(
  "/sale",
  authorizedOwnerOrAdmin,
  postServiceSaleValidations,
  postServiceSale
);

module.exports = router;
