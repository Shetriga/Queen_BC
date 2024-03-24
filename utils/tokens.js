const jwt = require("jsonwebtoken");

exports.generateToken = async (userId, type) => {
  const token = jwt.sign({ userId, type }, process.env.TOKEN_SECRET, {
    expiresIn: "12h",
  });
  return token;
};
