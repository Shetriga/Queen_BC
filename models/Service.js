const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    offerFee: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
