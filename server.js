//server code here
const express = require('express');
const mongoose = require('mongoose');
const models = require('./models'); // Adjust the path as needed
const path = require('path');
const port = 3000;

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://buyinzajoshua:Joshua20.@cluster0.btjnbey.mongodb.net/URA?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to URA DataBase');
});

// Define routes and middleware as needed
// For example, a simple route to get all tax payers:
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
