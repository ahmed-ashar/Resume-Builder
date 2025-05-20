const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

// Auth Router
router.post("/register", registerUser); //Register User
router.post("/login", loginUser); //Login User
router.get("/profile", protect, getUserProfile); //Get User Profile

// Route to handle image upload
router.post("/upload-image", upload.single("image"), (req, res) => {
  // Check if the file is present
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Construct image URL
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  // Return image URL
  res.status(200).json({ imageUrl });
});

module.exports = router;
