const Asset = require("../models/asset");
const { validationResult } = require("express-validator");
const { getDay } = require("../utils/functions");

exports.postNewAsset = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const {
    assetName,
    quantity,
    purchaseDate,
    lastUpdateDate,
    unitPrice,
    totalPrice,
    expiryDate,
  } = req.body;

  try {
    const newAsset = new Asset({
      assetName,
      quantity,
      purchaseDate,
      lastUpdateDate,
      unitPrice,
      totalPrice,
    });
    if (expiryDate) {
      newAsset.expiryDate = expiryDate;
    }

    await newAsset.save();
    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.getAllAssets = async (req, res, next) => {
  try {
    const foundAssets = await Asset.find({});
    if (!foundAssets) return res.sendStatus(404);

    res.status(200).json({
      assets: foundAssets,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};
