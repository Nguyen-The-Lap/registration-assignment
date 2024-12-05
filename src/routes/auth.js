const express = require('express');
const router = express.Router();

// Handle GET request to the root URL
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Handle GET request to the login page
router.get('/login', (req, res) => {
  res.send('Login Page');
});

// Handle POST request for login
router.post('/login', (req, res) => {
  // Handle login logic
  res.send('Logging in...');
});

module.exports = router;