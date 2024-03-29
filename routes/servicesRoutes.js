const express = require("express");
const {
  getAllServices,
  postNewService,
  deleteService,
  postServiceSale,
  putService,
} = require("../controllers/userControllers");
const {
  postNewServiceValidations,
  postServiceSaleValidations,
  putServiceValidations,
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

router.put("/:sid", authorizedOwner, putServiceValidations, putService);

router.delete("/:sid", authorizedOwner, deleteService);

router.post(
  "/sale",
  authorizedOwnerOrAdmin,
  postServiceSaleValidations,
  postServiceSale
);

module.exports = router;
