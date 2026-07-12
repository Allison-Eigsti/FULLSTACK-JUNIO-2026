require('dotenv').config()
const express = require('express')
const productRouter = require('./routes/productRouter.js')
const userRouter = require('./routes/userRouter.js')
const orderRouter = require('./routes/orderRouter.js')

// connect to database and require config db.js file
const connectDB = require('./config/db.js')
connectDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/orders', orderRouter)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})