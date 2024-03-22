const express = require("express");
const { getCustomers } = require("../controllers/userControllers");
const router = express.Router();

router.route("/", getCustomers);

module.exports = router;
