import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
    <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
    <Link to="/add" style={{ color: 'white' }}>Add Book</Link>
  </nav>
);

export default Navbar;
