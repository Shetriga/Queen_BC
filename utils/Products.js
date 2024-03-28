const Product = require(".././models/Product");

exports.deductTotalQuantity = async (arr) => {
  try {
    productsIds.foreach(async (id) => {
      const foundProduct = await Product.findById(arr.id);
      foundProduct.quantity -= arr.quantity;
      await foundProduct.save();
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    throw error;
  }
};
