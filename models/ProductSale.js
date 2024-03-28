const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSaleSchema = new Schema({
  products: [
    {
      id: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      productQuantity: {
        type: Number,
        required: true,
      },
      productTotal: {
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

module.exports = mongoose.model("Productsale", productSaleSchema);