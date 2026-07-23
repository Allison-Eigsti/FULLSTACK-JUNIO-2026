const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');



async function registerUser(req, res) {
    const { name, password } = req.body

    try{
        const hash = bcrypt.hashSync(password, 10)

        const newUser = new User({ name, password: hash })
        newUser.save()

        const token = jwt.sign({ id: newUser._id, name: newUser.name }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(201).json({ token })
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

async function loginUser(req, res) {

}

async function getUser(req, res) {

}



modules.export = {
    registerUser,
    loginUser,
    getUser
}