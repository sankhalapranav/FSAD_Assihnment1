// backend/controllers/bookController.js
const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    const { title, author, genre, condition, availability } = req.body;
    const userId = req.user.id;  // Assuming a middleware sets req.user
    try {
        const book = new Book({ title, author, genre, condition, availability, userId });
        await book.save();
        res.status(201).json({ message: 'Book listed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
