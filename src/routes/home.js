const express = require('express')

// Create the router
const router = express.Router()

// Configure the endpoint for the router
router
    .get('/', (req, res) => res.send('Hello from Docker!'))
    .get('/greetings/:name',
        (req, res) => res.send(`Hello, ${req.params.name}!`))

// Export the router
module.exports = router