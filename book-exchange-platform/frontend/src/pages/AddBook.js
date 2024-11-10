import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [condition, setCondition] = useState('');
  const [availability, setAvailability] = useState(''); // true or false
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      genre,
      condition,
      availability,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/books/add', bookData);
      console.log('Book added:', response.data);
      navigate('/books'); // Navigate to book listing after successful addition
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Genre" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Condition" 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Availability (true/false)" 
          value={availability} 
          onChange={(e) => setAvailability(e.target.value)} 
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
