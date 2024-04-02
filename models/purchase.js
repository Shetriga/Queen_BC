const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
  {
    purchaseName: {
      type: String,
      required: true,
    },
    purchaseQuantity: {
      type: Number,
      required: true,
    },
    purchaseTotal: {
      type: Number,
      required: true,
    },
    purchaseDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Purchase", purchaseSchema);
