import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.listen(4000, () => {
  console.log("Server is running at port 4000!");
});

app.use((err, req, res, next) => {
  if (err.statusCode) {
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }
  res.status(500).json({ success: false, message: err.message });
});
