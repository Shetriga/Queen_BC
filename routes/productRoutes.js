const express = require("express");
const {
  getAllProducts,
  postProduct,
  deleteProduct,
  putProduct,
} = require("../controllers/userControllers");
const {
  postProductValidations,
  putProductValidations,
} = require("../validations/product");
const router = express.Router();

router.get("/all/products", getAllProducts);

router.post("/product", postProductValidations, postProduct);

router.delete("/:pid", deleteProduct);

router.put("/:pid", putProductValidations, putProduct);

module.exports = router;
