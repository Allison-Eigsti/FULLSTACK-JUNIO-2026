const mongoose = require('mongoose');

// Defining database connection 
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/dia5'

// Start up database connection (async function w a try-catch block)
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log('Connected to MongoDB'); 
    } catch (error) {
        console.error(`Error connecting to MongoDB`, error.message);
        process.exit(1)
    }
}

module.exports = connectDB;