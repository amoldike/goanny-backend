const UserModel = require("./../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.addUser = async (req, res) => {
  try {
    const newUser = new UserModel({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    });

    res.json(await newUser.save());
  } catch (err) {
    res.send(err);
  }
};

exports.loginUser = async (req, res) => {
  const user = await UserModel.find({
    email: req.body.email,
    password: req.body.password,
  });

  if (user.length) {
    var token = jwt.sign({ id: user._id }, process.env.API_JWT_SECRET);
    return res.status(200).send({
      message: "Login Success..!",
      id: user._id,
      firstName: user.fname,
      token,
    });
  } else {
    return res.send({ message: "Invalid Details" });
  }
};

exports.getHomePage = (req, res) => {
  res.send("Welcome");
};
