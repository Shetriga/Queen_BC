const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokens");

exports.postLogin = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(401).json({
      errorMessage: `Validation error: ${result.errors[0].msg}`,
    });
  }

  const { username, password } = req.body;
  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) return res.sendStatus(404);
    const passwordIsValid = await bcrypt.compare(password, foundUser.password);
    if (!passwordIsValid) return res.sendStatus(401);
    const token = await generateToken(foundUser._id, foundUser.type);

    res.status(200).json({
      user: foundUser,
      token,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};
