import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publicationYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        console.error('Error fetching book:', error);
      });
  }, [id]);

  const handleSave = () => {
    setLoading(true);
    const data = {
      title,
      author,
      publicationYear: parseInt(publishYear),
    };
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        console.error('Error updating book:', error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="title" className="text-slate-500">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border border-slate-400 rounded px-2 py-1 w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author" className="text-slate-500">
              Author
            </label>
            <input
              type="text"
              id="author"
              className="border border-slate-400 rounded px-2 py-1 w-full"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="publishYear" className="text-slate-500">
              Publication Year
            </label>
            <input
              type="number"
              id="publishYear"
              className="border border-slate-400 rounded px-2 py-1 w-full"
              value={publishYear}
              onChange={(e) => setPublishYear(parseInt(e.target.value))}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateBook;
