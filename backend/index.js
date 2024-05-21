import express from "express";
import { Book } from "./models/bookModel.js";
import { PORT, mongoUrl } from "./config.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect(mongoUrl)
  .then(() => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log("listening");
    });
  })
  .catch((error) => {
    console.log(error);
  });