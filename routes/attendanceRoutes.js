const express = require("express");
const { authorizedOwnerOrAdmin } = require("../middleware/Authorizations");
const { postAttendanceValidations } = require("../validations/attendance");
const { postAttendance } = require("../controllers/attendanceControllers");
const router = express.Router();

router.post(
  "/new/attendance",
  authorizedOwnerOrAdmin,
  postAttendanceValidations,
  postAttendance
);

module.exports = router;
