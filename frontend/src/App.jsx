import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShowBooks from './pages/ShowBooks';
import CreateBook from './pages/CreateBook';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/detail/:id" element={<ShowBooks />}></Route>
        <Route path="/books/create" element={<CreateBook />}></Route>
        <Route path="/books/edit/:id" element={<UpdateBook />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
