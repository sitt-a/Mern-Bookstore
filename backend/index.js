import express from "express";
import { Book } from "./models/bookModel.js";
import { PORT, mongoUrl } from "./config.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome");
});

app.post("/books", async (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.publicationYear) {
      return response.status(400).send({
        message: "send all files"
      });
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publicationYear: request.body.publicationYear,
    };

    const createdBook = await Book.create(newBook);

    return response.status(201).send(createdBook);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.get('/books', async (request,response)=>{
    try{
        const books = await Book.find({});
        return response.status(200).json( books);
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

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