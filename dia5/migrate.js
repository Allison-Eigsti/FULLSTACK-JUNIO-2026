// Migrate users from a CSV file to the database
const csv = require('csv-parser')
const fs = require('fs')
const connectDB = require('./db.js')
const User = require('./models/User.js')
const results = [];

connectDB();


// Script to migrate
fs.createReadStream('users.csv')
  .pipe(csv( { separator: ';' } ))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.forEach(async (userData) => {
        console.log(userData);
        const { name, email, age } = userData;
        const newUser = new User({ name, email, age });
            try {
                await newUser.save();
                console.log(`User ${name} saved successfully.`);
            } catch (error) {
                console.error(`Error saving user ${name}:`, error.message);
            }
        });
        
    });