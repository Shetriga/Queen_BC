const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema(
  {
    assetName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    purchaseDate: {
      type: Number,
      required: true,
    },
    expiryDate: {
      type: String,
    },
    lastUpdateDate: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", assetSchema);
