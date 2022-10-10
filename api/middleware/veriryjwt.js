const jwt = require("jsonwebtoken");

const verifyjwt = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.json(401, {
      status: false,
      message: "Unauthorized, please login to continue",
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json(401, {
          status: false,
          message: "Unauthorized, please login to continue",
        });
      } else {
        console.log(decoded);
        req.user_id = decoded.data;
        next();
      }
    });
  }
};
module.exports = verifyjwt;
