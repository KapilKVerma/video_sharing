import express from "express";
const router = express.Router();

import { verifyToken } from "../config/verifyToken.js";

import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";

// Add comment
router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", getComments);

export default router;
