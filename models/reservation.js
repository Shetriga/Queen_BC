const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    action: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    deposite: {
      type: Number,
    },
    remaining: {
      type: Number,
    },
    total: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
