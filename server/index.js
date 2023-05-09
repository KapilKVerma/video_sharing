import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { connect } from "./config/dbConnect.js";

const PORT = process.env.SERVER_PORT || 8800;

const app = express();
app.use(cookieParser());
app.use(express.json());

// Request logger
app.use(morgan("dev"));

// Routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// Error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running at ${PORT}.`);
});
