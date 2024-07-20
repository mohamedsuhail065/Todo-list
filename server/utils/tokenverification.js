const jwt = require("jsonwebtoken");
const tokenVerification = (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, "todo", (err, decode) => {
    if (err) {
        res.json({status:0})
      res.send("Invalid Token");
      res.end();
    } else {
      return next();
    }
  });
};

module.exports = tokenVerification;
