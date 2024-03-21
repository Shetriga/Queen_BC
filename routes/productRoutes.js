const express = require("express");
const {
  getAllProducts,
  postProduct,
  deleteProduct,
} = require("../controllers/userControllers");
const { postProductValidations } = require("../validations/product");
const router = express.Router();

router.get("/all/products", getAllProducts);

router.post("/product", postProductValidations, postProduct);

router.delete("/:pid", deleteProduct);

module.exports = router;
