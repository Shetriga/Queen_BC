const { check } = require("express-validator");

exports.postNewServiceValidations = [
  check("name", "Name is missing").notEmpty(),
  check("fee", "Fee is missing").notEmpty(),
];

exports.postServiceSaleValidations = [
  check("services", "Services are missing").notEmpty(),
  check("orderTotal", "Order Total are missing").notEmpty(),
];
