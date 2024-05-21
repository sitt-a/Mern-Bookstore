import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({books}) => {
  return (
    <div> <table className="border-separate border-spacing-2 w-full">
    <thead>
      <tr>
        <th className="border border-gray-500 rounded-md">no</th>
        <th className="border border-gray-500 rounded-md">title</th>
        <th className="border border-gray-500 rounded-md max-md:hidden">author</th>
        <th className="border border-gray-500 rounded-md max-md:hidden">publish year</th>
        <th className="border border-gray-500 rounded-md">operation</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={book._id} className="h-8">
          <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
          <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
          <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.author}</td>
          <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publicationYear}</td>
          <td className="border border-slate-700 rounded-md text-center">
            <div className="flex justify-center gap-x-4">
              <Link to={`/books/detail/${book._id}`}>
                <BsInfoCircle className="text-2xl text-green-800" />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-600" />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className="text-2xl text-red-600" />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}

export default BooksTable