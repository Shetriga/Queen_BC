const express = require("express");
const {
  getAllServices,
  postNewService,
} = require("../controllers/userControllers");
const { postNewServiceValidations } = require("../validations/service");
const router = express.Router();

router.get("/", getAllServices);

router.post("/new/service", postNewServiceValidations, postNewService);

module.exports = router;
