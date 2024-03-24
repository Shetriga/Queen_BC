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
const {
  authorizedOwnerOrAdmin,
  authorizedOwner,
} = require("../middleware/Authorizations");
const router = express.Router();

router.get("/all/products", authorizedOwnerOrAdmin, getAllProducts);

router.post("/product", authorizedOwner, postProductValidations, postProduct);

router.delete("/:pid", authorizedOwner, deleteProduct);

router.put("/:pid", authorizedOwner, putProductValidations, putProduct);

module.exports = router;
