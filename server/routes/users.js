import express from "express";
const router = express.Router();

import { verifyToken } from "../config/verifyToken.js";

import { update, deleteUser, getUser } from "../controllers/user.js";
import { subscribe, unSubscribe, like, dislike } from "../controllers/user.js";

// Update user
router.put("/:id", verifyToken, update);

// Delete user
router.delete("/:id", verifyToken, deleteUser);

// Get a user
router.get("/find/:id", getUser);

// Subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

// Unsubscribe a user
router.put("/unsub/:id", verifyToken, unSubscribe);

// Like a video
router.put("/like/:videoId", like);

// Dislike a video
router.put("/dislike/:videoId", dislike);

export default router;
