const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Example route to register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/

  // Validate email format
  if (!emailRegex.test(username)) {
    return res.status(400).json({ message: 'Invalid email format.' })
  }

  // Validate password strength
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Password must have at least 6 characters, 1 number, and 1 special character.' })
  }

  try {
    // Create and save the new user
    const user = new User({ username, password })
    await user.save()
    res.status(201).json({ message: 'User registered successfully.' })
  } catch (error) {
    // Handle duplicate username error
    if (error.code === 11000) {
      res.status(400).json({ message: 'Username already exists.' })
    } else {
      res.status(500).json({ message: 'Internal server error.' })
    }
  }
})

// Example route to find a user by username
router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username })
    if (!user) {
      return res.status(404).send('User not found')
    }
    res.status(200).json(user)
  } catch (error) {
    console.error('Error finding user:', error)
    res.status(500).send('Error finding user')
  }
})

module.exports = router

