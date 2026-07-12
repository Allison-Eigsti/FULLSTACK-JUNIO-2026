const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/dia8'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Database connected successfully')
    } catch (error) {
        console.error(`Error connecting to Mongo`, error.message)
        process.exit(1)
    }
}

module.exports = connectDB

