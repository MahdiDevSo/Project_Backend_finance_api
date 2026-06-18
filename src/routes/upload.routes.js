import express from "express";
import { upload } from "../middleware/upload.middleware.js";
import { uploadProfilePicture } from "../controllers/upload.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @route   POST /upload/profile-picture
 * @desc    Upload profile image to Cloudinary
 * @access  Private
 */
router.post(
  "/profile-picture",
  auth,
  upload.single("file"),
  uploadProfilePicture,
);

export default router;
