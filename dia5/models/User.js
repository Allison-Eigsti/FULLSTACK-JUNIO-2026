const mongoose = require('mongoose')

// Create new schema
const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    age: Number
})


// Calling the model constructor on the mongoose instance and pass it the name of the collection and a reference to the schema definition
const User = mongoose.model('User', userSchema)

// export the model
module.exports = User