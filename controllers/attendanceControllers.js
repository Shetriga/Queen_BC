const Attendance = require("../models/attendance");
const { validationResult } = require("express-validator");
const { getDay } = require("../utils/functions");

exports.postAttendance = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { name, status } = req.body;

  const today = getDay();
  const currentTime = new Date()
    .toLocaleString("en-GB", { timeZone: "Africa/Cairo" })
    .split(" ")[1];

  try {
    const newAttendance = new Attendance({
      name,
      date: today,
      status,
      time: currentTime,
    });

    await newAttendance.save();
    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};
