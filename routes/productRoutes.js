const express = require("express");
const {
  getAllProducts,
  postProduct,
} = require("../controllers/userControllers");
const { postProductValidations } = require("../validations/product");
const router = express.Router();

router.get("/all/products", getAllProducts);

router.post("/product", postProductValidations, postProduct);

module.exports = router;
