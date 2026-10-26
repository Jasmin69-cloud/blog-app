const express=require('express')
const router =express.Router();

router.use((req, res, next) => {
  console.log("Routes hit:", req.method, req.originalUrl);
  next();
});
//const { createBlog } = require('../Controllers/Blogcontroller');

const blogRoutes= require('./BlogRouter');
const Registerrouter = require('./Registerrouter')


router.use('/blog',blogRoutes);
router.use('/auth',Registerrouter);


module.exports = router;
