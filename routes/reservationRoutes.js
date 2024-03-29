const express = require("express");
const { authorizedOwnerOrAdmin } = require("../middleware/Authorizations");
const {
  getAllReservations,
  postNewReservation,
  putMarkReservationAsDone,
} = require("../controllers/userControllers");
const { postNewReservationValidations } = require("../validations/reservation");
const router = express.Router();

router.get("/", authorizedOwnerOrAdmin, getAllReservations);

router.post(
  "/new/reservation",
  authorizedOwnerOrAdmin,
  postNewReservationValidations,
  postNewReservation
);

router.put("/mark/done/:rid", authorizedOwnerOrAdmin, putMarkReservationAsDone);

module.exports = router;
