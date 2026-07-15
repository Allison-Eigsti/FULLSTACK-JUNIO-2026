const personModel = require('../models/Person')

const getAllPeople = (req, res) => {
    try {
        const people = personModel.getAllPeople()

        res.status(200).json(people)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

const getPersonById = (req, res) => {
    try {
        const person = personModel.getPersonById(req.params.id)

        res.status(200).json(person)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}


const createPerson = (req, res) => {
    try {
        const newPerson = personModel.createNewPerson(req.body)

        res.status(201).json(newPerson)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}


const updatePerson = (req, res) => {
    try {
        const updatePerson = personModel.updatePerson({
            id: req.params.id,
            ...req.body
        })

        res.status(200).json(updatePerson)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

const deletePerson = (req, res) => {
    try {
        const updatedPeople = personModel.deletePerson(req.params.id)

        res.status(200).json(updatedPeople)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}



module.exports = {
    createPerson,
    getAllPeople,
    getPersonById,
    updatePerson,
    deletePerson
}