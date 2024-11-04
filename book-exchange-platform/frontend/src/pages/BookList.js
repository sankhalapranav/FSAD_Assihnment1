// src/pages/BookList.js
import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const data = await fetchBooks();
                console.log("HELO");
                console.log(data); // This should print the books data to the console
                setBooks(data);
            } catch (error) {
                console.error('Failed to fetch books:', error.message);
            }
        };
        loadBooks();
    }, []);

    return (
        <div>
            <h2>Available Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
