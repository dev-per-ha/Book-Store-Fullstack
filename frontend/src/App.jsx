import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </>
  );
};

export default App;
