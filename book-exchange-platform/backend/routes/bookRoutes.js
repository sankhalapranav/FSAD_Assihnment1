const express = require('express');
const router = express.Router();

// Example route
router.get('/books', (req, res) => {
  res.send("Fetching all books");
});

module.exports = router;
