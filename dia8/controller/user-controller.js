// unique: true creates a unique index in MongoDB, but it isn't a validator by itself. If you try to save a duplicate email, MongoDB will throw an error (error code 11000), which you should catch in your route or controller and return a suitable response (for example, 409 Conflict with a message like "Email already exists").
const User = require('../models/User.js')

function getAllUsers(req, res) {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }))
}

function getUserById(req, res) {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: "User not found"})
            }
            res.json(user)
        })
        .catch(err => res.status(500).json({ message: err.message }))
}

function createUser(req, res) {
    const { name, email, password, is_admin } = req.body
    const newUser = new User({ name, email, password, is_admin })
    newUser.save()
        .then(newUser => res.status(201).json(newUser))
        .catch(err => res.status(400).json({ message: err.message }))
}

async function updateUser(req, res) {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        if (req.body.name !== undefined) {
            user.name = req.body.name
        }

        if (req.body.email !== undefined ) {
            user.email = req.body.email
        }

        if (req.body.is_admin !== undefined ) {
            user.is_admin = req.body.is_admin
        }

        if (req.body.password) {
            user.password = req.body.password
        }

        await user.save()

        // Don't send the password back to the client
        const userObj = user.toObject()
        delete userObj.password

        res.json(userObj)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.json({ message: "User deleted successfully" })

    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}