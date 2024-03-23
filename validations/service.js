const { check } = require("express-validator");

exports.postNewServiceValidations = [
  check("name", "Name is missing").notEmpty(),
  check("fee", "Fee is missing").notEmpty(),
];
