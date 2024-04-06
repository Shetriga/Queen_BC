const { check } = require("express-validator");

exports.postAttendanceValidations = [
  check("name", "Name is missing").notEmpty(),
  check("status", "Status is missing").notEmpty(),
];
