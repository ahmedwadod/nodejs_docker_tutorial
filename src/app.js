const express = require('express')
const cors = require('cors')
const app = express()

// Use CORS with default options to allow all origins
app.use(cors())

// Import the home router
const homeRouter = require('./routes/home')

// Use the home router
app.use('/', homeRouter)

// Define the port to listen on
const port = 8080

// Start the server and log a message after it starts
app.listen(port, 
    () => console.log(`Server listening on port: ${port}`)
)