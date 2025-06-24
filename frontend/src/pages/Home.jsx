import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Book List</h2>
      {books.map(book => (
        <div key={book._id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
          <h3>{book.title} by {book.author}</h3>
          <p>${book.price}</p>
          <Link to={`/edit/${book._id}`}>Edit</Link> | 
          <button onClick={() => handleDelete(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
