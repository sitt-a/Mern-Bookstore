import express from "express";
import { Book } from "./models/bookModel.js";
import { PORT, mongoUrl } from "./config.js";
import mongoose from "mongoose";
import { booksroute } from "./route/booksroute.js";

const app = express();
app.use(express.json());

router.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome");
});


app.use("/books",booksroute);

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