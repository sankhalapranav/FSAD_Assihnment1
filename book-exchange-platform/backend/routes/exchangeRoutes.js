// backend/routes/exchangeRoutes.js
const express = require('express');
const router = express.Router();
const ExchangeRequest = require('../models/Exchange');

router.post('/request', async (req, res) => {
  const { requesterId, bookId, terms } = req.body;
  try {
    const request = new ExchangeRequest({ requesterId, bookId, terms });
    await request.save();
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: 'Error creating request' });
  }
});

module.exports = router;
