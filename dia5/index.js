require('dotenv').config()
const express = require('express')
const usersRouter = require('./routes/users')
const connectDB = require('./config/db.js')

//Connect to the databases
connectDB()


//Creating an instance of the express API-
const app = express()
// Establishing port saved in env file
const PORT = process.env.PORT || 3000;


//So that the API can accept json (los variables del body)
app.use(express.json())

// // Fetch request APIS
// app.get('/', (req, res) => {
//     res.send(`Hello World`)
// });

// Connect with router
app.use('/users', usersRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})


// index.js - rutas - controlladores - modelo
