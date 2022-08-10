require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// -----------------------Routes Start--------------------------------
app.use("/users", require("./routes/users"));
// -----------------------Routes End----------------------------------

//default route
app.get("/", (req, res) => {
  res.send("<h1>Server v.1.0</h1>");
});

// listing on port 5000 for api requests
app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
});
