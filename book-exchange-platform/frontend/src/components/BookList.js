import React, { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.summary}</p>
            <img src={book.coverImage} alt={book.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
