const jwt = require("jsonwebtoken");
require("dotenv").config();

const accountMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  try {
      if (token) {
          jwt.verify(token, process.env.SECRET_KEY);
          next();
      } else {
          res.status(401).json({
              success: false,
              message: "Token expired, access denied",
          });
      }
  } catch (err) {
      res.status(500).json({ success: false, message: err.message });
  }
};


module.exports = accountMiddleware;
