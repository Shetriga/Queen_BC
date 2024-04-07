const { check } = require("express-validator");

exports.postAddAssetValidations = [
  check("assetName", "Asset Name is missing").notEmpty(),
  check("quantity", "Quantity is missing").notEmpty(),
  check("purchaseDate", "Purchase Date is missing").notEmpty(),
  check("lastUpdateDate", "Last Update Date is missing").notEmpty(),
  check("unitPrice", "Unit Price Date is missing").notEmpty(),
  check("totalPrice", "Total Price Date is missing").notEmpty(),
];
