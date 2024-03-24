const jwt = require("jsonwebtoken");

// Authorized Admin
exports.authorizedAdmin = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.sendStatus(403);

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      if (user.type === "Admin") {
        req.user = user;
        next();
      } else {
        return res.sendStatus(401);
      }
    });
  } catch (e) {
    return res.sendStatus(403);
  }
};

// Authorized Owner
exports.authorizedOwner = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.sendStatus(403);

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      if (user.type === "Owner") {
        req.user = user;
        next();
      } else {
        return res.sendStatus(401);
      }
    });
  } catch (e) {
    return res.sendStatus(403);
  }
};

// Authorized Owner of Admin
exports.authorizedOwnerOrAdmin = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.sendStatus(403);

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      if (user.type === "Owner" || user.type === "Admin") {
        req.user = user;
        next();
      } else {
        return res.sendStatus(401);
      }
    });
  } catch (e) {
    return res.sendStatus(403);
  }
};
