const express = require("express");
const {
  createResume,
  getUserResume,
  getResumeById,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");
const { protect } = require("../middlewares/authMiddleware");
const { uploadResumeImages } = require("../controllers/uploadImages");
const upload = require("../middlewares/uploadMiddleware"); // <-- ADD THIS

const router = express.Router();

router.post("/", protect, createResume); // Create Resume
router.get("/", protect, getUserResume); // Get Resume
router.get("/:id", protect, getResumeById); // Get Resume By ID
router.put("/:id", protect, updateResume); // Update Resume

// ADD MULTER MIDDLEWARE HERE:
router.post(
  "/:id/upload-images",
  protect,
  upload.fields([{ name: "thumbnail" }, { name: "profileImage" }]),
  uploadResumeImages
);

router.delete("/:id", protect, deleteResume); // Delete Resume

module.exports = router;
