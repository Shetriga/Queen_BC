const express = require("express");
const {
  getAllProducts,
  postProduct,
  deleteProduct,
  putProduct,
  postProductSale,
  getAllProductSales,
} = require("../controllers/userControllers");
const {
  postProductValidations,
  putProductValidations,
  postProductSaleValidations,
} = require("../validations/product");
const {
  authorizedOwnerOrAdmin,
  authorizedOwner,
  authorizedAdmin,
} = require("../middleware/Authorizations");
const router = express.Router();

router.get("/all/products", authorizedOwnerOrAdmin, getAllProducts);

router.post("/product", authorizedOwner, postProductValidations, postProduct);

router.delete("/:pid", authorizedOwner, deleteProduct);

router.put("/:pid", authorizedOwner, putProductValidations, putProduct);

router.post(
  "/sale",
  authorizedOwnerOrAdmin,
  postProductSaleValidations,
  postProductSale
);

router.get("/all/sales", authorizedOwnerOrAdmin, getAllProductSales);

module.exports = router;
