const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dia6'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Database connected successfully')
    } catch (error) {
        console.error(`Error connecting to Mongo`, error.message)
        process.exit(1)
    } 
}

module.exports = connectDB;