const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSaleSchema = new Schema({
  services: [
    {
      id: {
        type: mongoose.Types.ObjectId,
        ref: "Service",
        required: true,
      },
      serviceFee: {
        type: Number,
        required: true,
      },
    },
  ],
  orderTotal: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("Servicesale", serviceSaleSchema);
