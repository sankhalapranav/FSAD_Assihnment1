const Book = require("../models/Book");

exports.addBook = async (req, res) => {
    try {
        const book = new Book({ ...req.body, owner: req.user.id });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: "Could not add book" });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find({ available: true }).populate("owner", "username");
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch books" });
    }
};
