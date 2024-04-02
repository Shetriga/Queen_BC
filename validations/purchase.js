const { check } = require("express-validator");

exports.postNewPurchaseValidations = [
  check("purchaseName", "Purchase Name is missing").notEmpty(),
  check("purchaseQuantity", "Purchase Quantity is missing").notEmpty(),
  check("purchaseTotal", "Purchase Total is missing").notEmpty(),
];
