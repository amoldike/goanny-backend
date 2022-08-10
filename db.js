const mongoose = require("mongoose");

mongoose
  .connect(process.env.dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // family: 4,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

const conn = mongoose.connection;

module.exports = conn;
