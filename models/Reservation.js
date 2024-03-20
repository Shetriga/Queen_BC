const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    reservationDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
