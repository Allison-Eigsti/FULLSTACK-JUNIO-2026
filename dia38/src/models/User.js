import mongoose from 'mongoose'

// Create new schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User