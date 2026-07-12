require('dotenv').config()
const express = require('express')
// require router

// connect to database and require config db.js file
const connectDB = require('./config/db.js')
connectDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

// connect to router

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})