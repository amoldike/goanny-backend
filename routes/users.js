const express = require("express");
const router = express.Router();
const usersController = require("./../controllers/users");
const verifyToken = require("../middleware/auth");

router.post("/", usersController.addUser);

router.post("/login", usersController.loginUser);

router.get("/home", verifyToken, usersController.getHomePage);

module.exports = router;
