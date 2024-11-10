// src/pages/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [criteria, setCriteria] = useState({ title: '', author: '', genre: '', availability: '' });
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/books/search', { params: criteria });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching books', error);
    }
  };

  const handleChange = (e) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Search Books</h2>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="genre" placeholder="Genre" onChange={handleChange} />
      <input name="availability" placeholder="Availability" onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
