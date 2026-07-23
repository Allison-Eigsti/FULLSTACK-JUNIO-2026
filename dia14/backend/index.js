require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./config/db')
const taskRouter = require('./routes/taskRouter.js')
const userRouter = require('./routes/userRouter.js')
const cors = require('cors')
const logger = require('./middlewares/logs')
const serverError = require('./middlewares/server-error')
const notFound = require('./middlewares/not-found')
const authorization = require('./middlewares/authorization')
const requestCounter = require('./middlewares/request-counter')

db()

// poner alli en el argumento the dominion name of your api so that its not for public use
app.use(express.json())
app.use(cors())
app.use(requestCounter)
app.use(logger)
app.use(authorization)


app.use('/tasks', taskRouter)
app.use('/user', userRouter)


app.use(serverError)
app.use(notFound)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})