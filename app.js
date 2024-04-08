const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customersRoutes");
const servicesRoutes = require("./routes/servicesRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const assetRoutes = require("./routes/assetRoutes");
const bodyParser = require("body-parser");

// CORS Policy headers and permissions
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/customer", customerRoutes);
app.use("/service", servicesRoutes);
app.use("/reservation", reservationRoutes);
app.use("/purchase", purchaseRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/asset", assetRoutes);

// Error Handler
app.use((error, req, res, next) => {
  console.log(error.message);
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).json({
    errorMessage: error.message,
  });
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connected, Server is up and running");
    });
  })
  .catch((e) => {
    console.log(e);
  });
