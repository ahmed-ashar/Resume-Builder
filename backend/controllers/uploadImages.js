const Resume = require("../models/Resume");

const uploadResumeImages = async (req, res) => {
  try {
    console.log("Upload request received for resume ID:", req.params.id);
    console.log("User ID from token:", req.user?._id);
    console.log("Files received:", req.files);

    const resumeId = req.params.id;
    const resume = await Resume.findOne({
      _id: resumeId,
      userId: req.user._id,
    });

    if (!resume) {
      console.error("Resume not found for ID:", resumeId);
      return res
        .status(404)
        .json({ message: "Resume not found or unauthorized" });
    }

    const newThumbnail = req.files?.thumbnail?.[0];
    const newProfileImage = req.files?.profileImage?.[0];

    if (newThumbnail) {
      console.log("New thumbnail uploaded:", newThumbnail.path);
      resume.thumbnailLink = newThumbnail.path; // Cloudinary URL
    }
    if (newProfileImage) {
      console.log("New profile image uploaded:", newProfileImage.path);
      resume.profileInfo.profilePreviewUrl = newProfileImage.path; // Cloudinary URL
    }

    await resume.save();
    console.log("Resume updated with new image links.");

    res.status(200).json({
      message: "Images uploaded successfully",
      thumbnailLink: resume.thumbnailLink,
      profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    res
      .status(500)
      .json({ message: "Failed to upload images", error: error.message });
  }
};

module.exports = { uploadResumeImages };