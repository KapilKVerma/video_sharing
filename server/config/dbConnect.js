import mongoose from "mongoose";

// DB Connection
export const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to DB."))
    .catch((err) => {
      throw err;
    });
};
