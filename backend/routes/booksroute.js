import express from "express";
import { Book } from "../models/bookModel.js";
import mongoose from "mongoose";
const router = express.Router();



router.post("/", async (request, response) => {
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

router.get('/', async (request,response)=>{
    try{
        const books = await Book.find({});
        return response.status(200).json( books);
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.get('/:id', async (request,response)=>{
    try{
        const {id} =request.params;
        const book = await Book.findById(id);
        return response.status(200).json( book);
        
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.put('/:id', async (req, res) => {
  try {
    // Check if all required fields are present
    if (!req.body.title || !req.body.author || !req.body.publicationYear) {
      return res.status(400).send({ message: 'Send all required fields' });
    }

    const { id } = req.params;

    // Convert the id to a valid ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    // Update the book
    const result = await Book.findByIdAndUpdate(objectId, req.body, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request,response)=>{
  try{
      const {id} =request.params;
      const result = await Book.findByIdAndDelete(id);
      if (!result){
        return response.status(404).json({message:"book not found"})
      }
      return response.status(200).send({message: "Book deleted succesfully"});
      
  }catch(error){
      console.log(error.message);
      response.status(500).send({ message: error.message });
  }
})
export  {router};