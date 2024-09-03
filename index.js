import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./useRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/user", userRouter);

mongoose.connect(process.env.URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on https://localhost:${process.env.PORT}`);
  });
});

//https://localhost:3003
//https://localhost:3003/api/user/register
//https://localhost:3003/api/user/login
