const express = require("express");
const { signup, loginUser } = require("../controllers/userController");
const router = express.Router();

//signup
router.post("/signup", signup);

//Login User
router.post("/login", loginUser);

module.exports = router;
