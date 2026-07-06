const csv = require('csv-parser')
const fs = require('fs')
const User = require('./models/User.js')
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv( { separator: ';' } ));
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.forEach(async (user) => {
        try {
            const { name, email, age } = user;
            const newUser = new User({ name, email, age });
            await newUser.save();
            console.log(`User ${name} saved successfully.`);
        } catch (error) {
            console.error(`Error saving user ${user.name}:`, error.message);
        }
  });
)