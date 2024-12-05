const mongoose = require('mongoose');

// Replace with your actual MongoDB Atlas connection string
const uri = 'mongodb+srv://lapnguyen:1234@baitapweb.lzeap.mongodb.net/?retryWrites=true&w=majority&appName=Baitapweb';

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

module.exports = mongoose;