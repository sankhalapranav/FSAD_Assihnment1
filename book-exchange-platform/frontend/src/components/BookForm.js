import React, { useState } from "react";
import axios from "axios";

function BookForm() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    isbn: "",
    summary: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/books`, book);
      alert(response.data.message);
      setBook({
        title: "",
        author: "",
        genre: "",
        publicationDate: "",
        isbn: "",
        summary: "",
        coverImage: "",
      });
    } catch (error) {
      console.error("Error adding book", error);
      alert("Failed to add book");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
      <input type="text" name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" required />
      <input type="date" name="publicationDate" value={book.publicationDate} onChange={handleChange} required />
      <input type="text" name="isbn" value={book.isbn} onChange={handleChange} placeholder="ISBN" required />
      <textarea name="summary" value={book.summary} onChange={handleChange} placeholder="Summary" required />
      <input type="text" name="coverImage" value={book.coverImage} onChange={handleChange} placeholder="Cover Image URL" />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
