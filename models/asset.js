const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
  assetName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Asset", assetSchema);
