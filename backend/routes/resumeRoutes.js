const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware'); // multer setup
const { uploadResumeImages, createResume, getUserResume, getResumeById, updateResume, deleteResume } = require('../controllers/resumeController');

const router = express.Router();

router.post('/', protect, createResume);
router.get('/', protect, getUserResume);
router.get('/:id', protect, getResumeById);
router.put('/:id', protect, updateResume);

// multer middleware handles file uploads before controller runs
router.post(
  '/:id/upload-images',
  protect,
  upload.fields([{ name: 'thumbnail' }, { name: 'profileImage' }]),
  uploadResumeImages
);

router.delete('/:id', protect, deleteResume);

module.exports = router;
