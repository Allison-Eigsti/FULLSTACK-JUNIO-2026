const personModel = require('../models/Person')
const classModel = require('../models/Classroom')


const getAllClasses = (req, res) => {
    try {

    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

const getClassById = (req, res) => {
    try {

    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}



const createClass = (req, res) => {
    try {

    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}



const updateClass = (req, res) => {
    try {

    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteClass = (req, res) => {
    try {

    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass
}