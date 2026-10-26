const express = require("express");
const router = express.Router();
const {signupUser} = require("../controllers/Usercontroller"); // or controller
const {loginUser} = require("../controllers/Usercontroller");

router.post("/signup", signupUser);
router.post("/login",loginUser);

module.exports = router;