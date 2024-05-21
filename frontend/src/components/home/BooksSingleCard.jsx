import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import {PiBookOpenTextLight} from 'react-icons/pi';
const BooksSingleCard = ({item}) => {
  return (
    <div key={item._id}
    className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
    >
 <h1 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'> {item.publicationYear}</h1>
   <h3 className='my-2 text-gray-500'>{item._id}</h3>
   <div className='flex justify-start items-center gap-x-2'>
    <PiBookOpenTextLight className='text-xl'></PiBookOpenTextLight>
   <h1 className='my-1'>{item.title}</h1> 
   </div>
   <div className='flex justify-start items-center gap-x-2'>
      
    <BiUserCircle className='text-red-300 text-2xl'></BiUserCircle>
   <h1 className='my-1'>{item.author}</h1>
   </div>
   <div className='flex justify-start items-center gap-x-2 mt-4 p-4'>
    <Link to={`/books/details/${item._id}`}>
        <BsInfoCircle className='text-2xl text-green-800 hover:text-black'></BsInfoCircle>
    </Link>
    <Link to={`/books/edit/${item._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-black'></AiOutlineEdit>
    </Link>
    <Link to={`/books/delete/${item._id}`}>
        <MdOutlineDelete className='text-2xl text-red-800 hover:text-black'></MdOutlineDelete>
    </Link>
   </div>
</div>
  )
}

export default BooksSingleCard