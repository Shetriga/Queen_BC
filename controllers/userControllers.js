const Product = require("../models/Product");
const Customer = require("../models/Customer");
const Service = require("../models/Service");
const Asset = require("../models/asset");
const Reservation = require("../models/reservation");
const ProductSale = require("../models/ProductSale");
const ServiceSale = require("../models/ServiceSale");
const Purchase = require("../models/purchase");
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

exports.getAllReservations = async (req, res, next) => {
  try {
    const foundReservations = await Reservation.find({});
    if (!foundReservations) return res.sendStatus(404);

    res.status(200).json({
      reservations: foundReservations,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.postNewReservation = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { name, phone, action, date, deposite, remaining, total, notes } =
    req.body;
  try {
    const newReservation = new Reservation({
      name,
      action,
      date,
      total,
      remaining,
      status: "غير مكتمل",
    });
    if (phone) {
      newReservation.phone = phone;
    }
    if (deposite) {
      newReservation.deposite = deposite;
    }
    if (notes) {
      newReservation.notes = notes;
    }
    await newReservation.save();
    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.putCustomer = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { name, phone } = req.body;
  const customerId = req.params.cid;
  try {
    const foundCustomer = await Customer.findById(customerId);
    if (!foundCustomer) return res.sendStatus(404);

    foundCustomer.name = name;
    foundCustomer.phone = phone;
    await foundCustomer.save();
    res.sendStatus(200);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.postProductSale = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const { products, orderTotal, notes, unitPrice } = req.body;

  try {
    const newProductSale = new ProductSale({
      products,
      orderTotal,
      unitPrice,
      orderDate: today,
    });
    if (notes) {
      newProductSale.notes = notes;
    }

    await newProductSale.save();

    for (let i = 0; i < products.length; i++) {
      const found = await Product.findById(products[i].id);
      found.quantity -= products[i].productQuantity;
      await found.save();
    }

    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.postServiceSale = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const { services, orderTotal, notes, customerId } = req.body;

  try {
    const newServiceSale = new ServiceSale({
      services,
      customerId,
      orderTotal,
      orderDate: today,
    });
    if (notes) {
      newServiceSale.notes = notes;
    }

    await newServiceSale.save();

    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.putService = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const serviceId = req.params.sid;
  const { name, fee, offerFee } = req.body;

  try {
    const foundService = await Service.findById(serviceId);
    if (!foundService) return res.sendStatus(404);

    foundService.name = name;
    foundService.fee = fee;
    foundService.offerFee = offerFee;

    await foundService.save();
    res.sendStatus(200);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.getAllProductSales = async (req, res, next) => {
  try {
    const foundSales = await ProductSale.find({});
    if (!foundSales) return res.sendStatus(404);

    res.status(200).json({
      productSales: foundSales,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.getAllServicesSales = async (req, res, next) => {
  try {
    const foundServices = await ServiceSale.find({})
      .populate("customerId")
      .exec();
    if (!foundServices) return res.sendStatus(404);

    res.status(200).json({
      serviceSales: foundServices,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.putMarkReservationAsDone = async (req, res, next) => {
  const reservationId = req.params.rid;
  try {
    const foundReservation = await Reservation.findById(reservationId);
    if (!foundReservation) return res.sendStatus(404);

    foundReservation.status = "مكتمل";
    await foundReservation.save();
    res.sendStatus(200);
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

exports.postNewPurchase = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { purchaseName, purchaseQuantity, purchaseTotal, purchaseDate } =
    req.body;

  try {
    const newPurchase = new Purchase({
      purchaseName,
      purchaseTotal,
      purchaseQuantity,
    });
    if (purchaseDate) {
      newPurchase.purchaseDate = purchaseDate;
    } else {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      newPurchase.purchaseDate = today;
    }

    await newPurchase.save();
    res.sendStatus(201);
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};

exports.getAllPurchases = async (req, res, next) => {
  try {
    const foundPurchases = await Purchase.find({});
    if (!foundPurchases) return res.sendStatus(404);

    res.status(200).json({
      purchases: foundPurchases,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};
