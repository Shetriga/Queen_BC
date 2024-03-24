const express = require("express");
const {
  getAllServices,
  postNewService,
  deleteService,
} = require("../controllers/userControllers");
const { postNewServiceValidations } = require("../validations/service");
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

module.exports = router;
