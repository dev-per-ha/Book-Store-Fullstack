import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Both.css'

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({ title: '', author: '', price: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(res => setBook(res.data));
  }, [id]);

  const handleChange = e => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/books/${id}`, book);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
      <input name="title" value={book.title} onChange={handleChange} /><br />
      <input name="author" value={book.author} onChange={handleChange} /><br />
      <input name="price" value={book.price} type="number" onChange={handleChange} /><br />
      <textarea name="description" value={book.description} onChange={handleChange} /><br />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBook;
