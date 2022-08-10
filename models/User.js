const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: {
    type: String,
    unique: true,
  },
  mobile: Number,
  password: String,
});

module.exports = mongoose.model("users", UserSchema);
