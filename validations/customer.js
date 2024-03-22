const { check } = require("express-validator");

exports.postNewCustomerValidations = [
  check("name", "Name is missing").notEmpty(),
  check("phone", "Phone is missing").notEmpty(),
];
