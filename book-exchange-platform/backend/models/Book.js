// backend/models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  condition: { type: String, required: true }, // Condition like "New", "Used"
  availability: { type: Boolean, required: true, default: true }, // True if available
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
});

module.exports = mongoose.model('Book', BookSchema);
