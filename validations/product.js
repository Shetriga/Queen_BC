const { check } = require("express-validator");

exports.postProductValidations = [
  check("name", "Name is missing").notEmpty(),
  check("quantity", "Quantity is missing").notEmpty(),
  check("unitPrice", "Unit Price is missing").notEmpty(),
];

exports.putProductValidations = [
  check("name", "Name is missing").notEmpty(),
  check("quantity", "Quantity is missing").notEmpty(),
  check("unitPrice", "Unit Price is missing").notEmpty(),
];

exports.postProductSaleValidations = [
  check("products", "Products are missing").notEmpty(),
  check("orderTotal", "Order Total are missing").notEmpty(),
];
