const express = require("express");
const { authorizedOwner } = require("../middleware/Authorizations");
const router = express.Router();

router.get("/all", authorizedOwner);

module.exports = router;
