import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API_URL}/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [API_URL]);

  return (
    <div>
      <h1>Available Books</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title}</li> // Assuming each book has an `_id` and `title`
        ))}
      </ul>
    </div>
  );
};

export default BookList;
