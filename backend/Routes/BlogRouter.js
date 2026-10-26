const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  createBlog,
  getBlog,
  getBlogsbyId,
  updateBlog,
  deleteBlog,
} = require("../controllers/Blogcontroller");

// Image upload config: files are saved in backend/uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Final URLs (mounted at /api/blog in Routes/index.js)
router.post("/", upload.single("image"), createBlog); // POST   /api/blog
router.get("/", getBlog);                             // GET    /api/blog
router.get("/:id", getBlogsbyId);                     // GET    /api/blog/:id
router.put("/:id", updateBlog);                       // PUT    /api/blog/:id
router.delete("/:id", deleteBlog);                    // DELETE /api/blog/:id

module.exports = router;