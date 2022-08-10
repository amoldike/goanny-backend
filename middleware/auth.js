// ------------------------token authentication-----------------------
const verifyToken = (req, res, next) => {
  let toeknHeader = req.headers["authorization"];

  if (toeknHeader !== undefined) {
    let tokenArray = toeknHeader.split(" ");
    let token = tokenArray[1];
    jwt.verify(token, process.env.API_JWT_SECRET, (err) => {
      if (err) {
        res.status(403).send(err);
      } else {
        next();
      }
    });
  } else {
    res.status(401).send("Unauthorized Access");
  }
};
module.exports = verifyToken;
