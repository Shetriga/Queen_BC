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
      serviceName: {
        type: String,
        required: true,
      },
      serviceFee: {
        type: Number,
        required: true,
      },
    },
  ],
  customerId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
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
