const express = require('express')
const mongoose = require('mongoose')

const app = express()

const config = require('./configLoader')
const connectDB = require('./db')


const startServer = async () => {
  await connectDB();

  app.listen(config.port, () => {
  console.log(`Server running in ${config.env}`);
});
}

startServer()


