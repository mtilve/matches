const jwt = require("jsonwebtoken");

const secured = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = jwt.verify(authorization, 'secret');
    req.id = _id;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = { secured };
