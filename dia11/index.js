const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./middlewares/logs')
const serverError = require('./middlewares/server-error')
const notFound = require('./middlewares/not-found')
const authorization = require('./middlewares/authorization')
const requestCounter = require('./middlewares/request-counter')

// poner alli en el argumento the dominion name of your api so that its not for public use
app.use(cors())
app.use(requestCounter)
app.use(logger)
app.use(express.static('public'))

const port = process.env.PORT || 3000

app.get('/1', (req, res) => {
    res.send('no autorizado')
})


app.use(authorization)

app.get('/2', (req, res) => {
    res.send('si autorizado')
})

// 500 internal server error
app.use(serverError)

// // 404 not found
app.use(notFound)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})