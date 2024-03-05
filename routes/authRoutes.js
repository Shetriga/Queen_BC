const express = require("express");
const { postLoginValidations } = require("../validations/auth");
const { postLogin } = require("../controllers/authController");
const router = express.Router();

router.post("/login", postLoginValidations, postLogin);

module.exports = router;
