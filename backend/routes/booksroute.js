import e from "express";
const router = express.Router();

router.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome");
});




router.post("/books", async (request, response) => {
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

router.get('/books', async (request,response)=>{
    try{
        const books = await Book.find({});
        return response.status(200).json( books);
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.get('/books/:id', async (request,response)=>{
    try{
        const {id} =request.params;
        const book = await Book.findById(id);
        return response.status(200).json( book);
        
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.put("/books/:id", async (request,response)=>{
  try{
    if (!request.body.title || !request.body.author || !request.body.publicationYear) {
      return response.status(400).send({message:"send all required fields error"})
    }
    const {id }= request.params;
    const result=await Book.findByIDAndUpdate(id,request,body)
    if (!result){
      return response.status(404).json({message:"book not found"})
    }
    return response.status(200).send({message: "Book updated succesfully"})
  }catch(error){
      console.log(error.message);
      response.status(500).send({ message: error.message });
  }
})

router.delete("/books/:id", async (request,response)=>{
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