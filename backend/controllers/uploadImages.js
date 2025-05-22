const Resume = require('../models/Resume');

const uploadResumeImages = async (req, res) => {
  try {
    const resumeId = req.params.id;
    console.log('Resume ID:', resumeId);

    // Find the resume owned by the logged-in user
    const resume = await Resume.findOne({
      _id: resumeId,
      userId: req.user._id,
    });

    if (!resume) {
      console.error('Resume not found for ID:', resumeId);
      return res.status(404).json({ message: 'Resume not found or unauthorized' });
    }

    console.log('Uploaded files:', req.files);

    const newThumbnail = req.files.thumbnail?.[0];
    const newProfileImage = req.files.profileImage?.[0];

    if (newThumbnail) {
      resume.thumbnailLink = newThumbnail.path; // Cloudinary URL
    }

    if (newProfileImage) {
      resume.profileInfo.profilePreviewUrl = newProfileImage.path; // Cloudinary URL
    }

    await resume.save();

    res.status(200).json({
      message: 'Images uploaded successfully',
      thumbnailLink: resume.thumbnailLink,
      profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
    });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ message: 'Failed to upload images', error: error.message });
  }
};

module.exports = { uploadResumeImages };
