const { check } = require("express-validator");

exports.postLoginValidations = [
  check("username", "Username is missing").notEmpty(),
  check("password", "Password is missing").notEmpty(),
];
