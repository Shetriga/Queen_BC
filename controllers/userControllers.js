const Product = require("../models/Product");
const Customer = require("../models/Customer");
const Service = require("../models/Service");
const { validationResult } = require("express-validator");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      products,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.postProduct = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { name, quantity, unitPrice, expiryDate, offerPrice } = req.body;
  try {
    const newProduct = new Product({
      name,
      quantity,
      unitPrice,
    });
    if (expiryDate !== null) {
      newProduct.expiryDate = expiryDate;
    }
    if (offerPrice !== null) {
      newProduct.offerPrice = offerPrice;
    }

    await newProduct.save();
    res.status(201).json({
      message: "Done",
      status: 201,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const productId = req.params.pid;
  try {
    const foundProduct = await Product.findById(productId);
    if (!foundProduct) return res.sendStatus(404);

    await foundProduct.deleteOne();
    res.sendStatus(200);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.putProduct = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const productId = req.params.pid;
  const { name, quantity, unitPrice, expiryDate, offerPrice } = req.body;
  try {
    const foundProduct = await Product.findById(productId);
    if (!foundProduct) return res.sendStatus(404);

    foundProduct.name = name;
    foundProduct.quantity = quantity;
    foundProduct.unitPrice = unitPrice;
    if (expiryDate) {
      foundProduct.expiryDate = expiryDate;
    }
    if (offerPrice) {
      foundProduct.offerPrice = offerPrice;
    }
    await foundProduct.save();

    res.sendStatus(200);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.getCustomers = async (req, res, next) => {
  try {
    const foundUsers = await Customer.find({});
    if (!foundUsers) return res.sendStatus(404);

    res.status(200).json({
      users: foundUsers,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.postNewCustomer = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { name, phone } = req.body;
  try {
    const newCustomer = new Customer({
      name,
      phone,
    });
    await newCustomer.save();
    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.getAllServices = async (req, res, next) => {
  try {
    const foundServices = await Service.find({});
    if (!foundServices) return res.sendStatus(404);

    res.status(200).json({
      services: foundServices,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.postNewService = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { name, fee, offerFee } = req.body;
  try {
    const newService = new Service({
      serviceName: name,
      fee,
    });
    if (offerFee) {
      newService.offerFee = offerFee;
    }

    await newService.save();
    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.deleteService = async (req, res, next) => {
  const serviceId = req.params.sid;
  try {
    const foundService = await Service.findById(serviceId);
    if (!foundService) return res.sendStatus(404);

    await foundService.deleteOne();
    res.sendStatus(200);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};
