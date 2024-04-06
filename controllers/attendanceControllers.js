const Attendance = require("../models/attendance");
const { validationResult } = require("express-validator");

exports.postAttendance = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { name, date, status } = req.body;
  try {
    const newAttendance = new Attendance({
      name,
      date,
      status,
    });

    await newAttendance.save();
    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};
