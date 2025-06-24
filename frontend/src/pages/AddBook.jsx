import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Both.css'
const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '', price: '', description: '' });
  const navigate = useNavigate();

  const handleChange = e => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/books', book);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
      <input name="title" onChange={handleChange} placeholder="Title" /><br />
      <input name="author" onChange={handleChange} placeholder="Author" /><br />
      <input name="price" onChange={handleChange} placeholder="Price" type="number" /><br />
      <textarea name="description" onChange={handleChange} placeholder="Description" /><br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
