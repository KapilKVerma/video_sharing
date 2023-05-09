import express from "express";
const router = express.Router();

import { verifyToken } from "../config/verifyToken.js";

import {
  addVideo,
  updateVideo,
  deleteVideo,
  getByTag,
  search,
} from "../controllers/video.js";
import { getVideo, addView, trend, random, sub } from "../controllers/video.js";

// Create Video
router.post("/", verifyToken, addVideo);

// Update Video
router.put("/:id", verifyToken, updateVideo);

// Delete Video
router.delete("/id", verifyToken, deleteVideo);

// Get a Video
router.get("/find/:id", getVideo);

// Update Video View
router.put("/view/:id", addView);

// Trending Videos
router.get("/trend", trend);

// Random Videos
router.get("/random", random);

// Subscribed Channel Videos
router.get("/sub", verifyToken, sub);

// Videos by tags
router.get("/tags", getByTag);

// Videos search
router.get("/search", search);

export default router;
