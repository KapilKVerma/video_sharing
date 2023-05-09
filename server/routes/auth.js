import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/auth.js";

// Create User
router.post("/signup", signup);

// Sign In
router.post("/signin", signin);

// Google Auth
router.post("/google");

export default router;
