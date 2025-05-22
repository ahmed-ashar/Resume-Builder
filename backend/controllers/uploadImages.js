const Resume = require("../models/Resume");
const upload = require("../middlewares/uploadMiddleware");

const uploadResumeImages = async (req, res) => {
  try {
    upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])(
      req,
      res,
      async (err) => {
        if (err) {
          console.error("Multer error:", err);
          return res
            .status(400)
            .json({ message: "File upload failed", error: err.message });
        }

        const resumeId = req.params.id;
        console.log("Resume ID:", resumeId);

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

        console.log("req.files:", req.files);

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
          message: "Images uploaded successfully",
          thumbnailLink: resume.thumbnailLink,
          profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
        });
      }
    );
  } catch (error) {
    console.error("Error uploading images:", error);
    res
      .status(500)
      .json({ message: "Failed to upload images", error: error.message });
  }
};

module.exports = { uploadResumeImages };
// const fs = require("fs");
// const path = require("path");
// const Resume = require("../models/Resume");
// const upload = require("../middlewares/uploadMiddleware");

// const uploadResumeImages = async (req, res) => {
//   try {
//     upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])(
//       req,
//       res,
//       async (err) => {
//         if (err) {
//           return res
//             .status(400)
//             .json({ message: "File upload failed", error: err.message });
//         }

//         const resumeId = req.params.id;
//         const resume = await Resume.findOne({
//           _id: resumeId,
//           userId: req.user._id,
//         });

//         if (!resume) {
//           return res
//             .status(404)
//             .json({ message: "Resume not found or unauthoried" });
//         }

//         const uploadsFolder = path.join(__dirname, "..", "uploads");
//         const baseUrl = `${req.protocol}://${req.get("host")}`;

//         const newThumbnail = req.files.thumbnail?.[0];
//         const newProfileImage = req.files.profileImage?.[0];

//         // If new thumbnail uploaded, delete old one
//         // if (newThumbnail && resume.thumbnailLink){
//         if (newThumbnail) {
//           if (resume.thumbnailLink) {
//             const oldThumbnail = path.join(
//               uploadsFolder,
//               path.basename(resume.thumbnailLink)
//             );
//             if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
//           }
//           resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
//         }

//         // If new profile image uploaded, delete old one
//         // If (newProfileImage && resume.profileInfo?.profilePreviewUrl){
//         if (newProfileImage) {
//           if (resume.profileInfo?.profilePreviewUrl) {
//             const oldProfile = path.join(
//               uploadsFolder,
//               path.basename(resume.profileInfo.profilePreviewUrl)
//             );
//             if (fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
//           }
//           resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
//         }

//         await resume.save();

//         res.status(200).json({
//           message: "Images uploaded successfully",
//           thumbnailLink: resume.thumbnailLink,
//           profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Error uploading images:", error);
//     res
//       .status(500)
//       .json({ message: "Failed to upload images", error: error.message });
//   }
// };

// module.exports = { uploadResumeImages };
