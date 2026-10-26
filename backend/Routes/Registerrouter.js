const express = require("express");
const router= express.Router();
const { registerUser,loginUser, signupUser } = require("../controllers/Usercontroller")



router.post('/register',registerUser);
router.post('/login', loginUser);
router.post('/signup',signupUser);

module.exports = router;