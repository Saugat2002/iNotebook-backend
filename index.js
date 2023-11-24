const connectToMongo = require('./db'); // Importing connect to Mongo
const express = require('express') // Inporting Express

connectToMongo(); // Connecting to Mongo
const app = express() // Creating an Express app
const port = 5000   // Setting the port

app.use(express.json()) // Using express.json middleware to parse the request body

// Available Routes
app.use('/api/auth', require('./routes/auth')) // Using auth.js for authentication
app.use('/api/notes', require('./routes/notes')) // Using notes.js for notes

// Listening on the port
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
