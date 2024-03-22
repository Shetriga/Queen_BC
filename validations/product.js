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
  check("offerPrice", "Offer Price is missing").notEmpty(),
  check("expiryDate", "Expiry Date is missing").notEmpty(),
];
