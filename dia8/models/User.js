const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please enter a valid email address",
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6
    },
    is_admin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save", async function () {
    try {
        if (!this.isModified("password")) {
            return;
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
        throw err;
    }
});

// Creates a method on every User object to hash the candidate password and checking if it matches the stored hash
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User;
// A note on user login: during login must fetch the user and call: const isValid = await user.comparePassword(password);