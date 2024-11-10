// backend/routes/bookRoutes.js

const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Add a new book
router.post('/add', async (req, res) => {
  const { title, author, genre, condition, availability } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      genre,
      condition,
      availability,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);  // Return the saved book
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ message: 'Error adding book', error });
  }
});

module.exports = router;
