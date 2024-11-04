const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON

// Mock login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Implement your authentication logic here (e.g., check user in the database)
  if (email === 'test@example.com' && password === 'password') {
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Mock register route
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  // Implement your registration logic here (e.g., save user to the database)
  res.json({ message: 'Registration successful!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
