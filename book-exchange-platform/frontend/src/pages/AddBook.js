// src/pages/AddBook.js
import React, { useState } from 'react';
import { addBook } from '../services/api';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [condition, setCondition] = useState('New');
    const navigate = useNavigate();

    const handleAddBook = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) return navigate('/login');
        try {
            await addBook({ title, author, genre, condition, availability: true }, token);
            navigate('/books');
        } catch (error) {
            console.error('Failed to add book:', error.message);
        }
    };

    return (
        <form onSubmit={handleAddBook}>
            <h2>Add New Book</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                <option value="New">New</option>
                <option value="Good">Good</option>
                <option value="Used">Used</option>
            </select>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;
