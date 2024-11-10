// backend/routes/messageRoutes.js
router.post('/send', (req, res) => {
    const { senderId, receiverId, message } = req.body;
    // Mock response
    res.json({ success: true, message: 'Message sent successfully' });
  });
  