import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoad] = useState(false);
  const [showType, setType] = useState("table");
 
  useEffect(() => {
    setLoad(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
        setLoad(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded-lg'
        onClick={()=>setType("table")}
        >
      Table
        </button>
        <button className='bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded-lg'
        onClick={()=>setType("card")}
        >
      card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? 
        <Spinner />
      : 
      showType === "table"?<BooksTable books={books}/>:<BooksCard books={books}></BooksCard>
       
      }
    </div>
  );
};

export default Home;