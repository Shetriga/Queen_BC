const express = require("express");
const { authorizedOwner } = require("../middleware/Authorizations");
const { postAddAssetValidations } = require("../validations/asset");
const {
  postNewAsset,
  getAllAssets,
} = require("../controllers/assetController");
const router = express.Router();

router.get("/all", authorizedOwner, getAllAssets);

router.post(
  "/new/asset",
  authorizedOwner,
  postAddAssetValidations,
  postNewAsset
);

module.exports = router;
