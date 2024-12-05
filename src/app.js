const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const authRoutes = require('./routes/auth');
const userRoutes = require('./controllers/user');
const { UserModel } = require('./models');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "demoapp",
    name: "app",
    resave: true,
    saveUninitialized: true,
  })
);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route setup
app.use('/', authRoutes);
app.use('/users', userRoutes);

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
