const express = require("express");
const { updateOrCreateUser } = require("../controllers/usersController");
const router = express.Router();

//Update or Create an User
router.put("/:email", updateOrCreateUser);

module.exports = router;
