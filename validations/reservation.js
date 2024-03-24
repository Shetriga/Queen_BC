const { check } = require("express-validator");

exports.postNewReservationValidations = [
  check("name", "Name is missing").notEmpty(),
  check("action", "Action is missing").notEmpty(),
  check("date", "Date is missing").notEmpty(),
  check("total", "Total is missing").notEmpty(),
];
