const { parseCSV, writeCSV } = require('../csv.js')
const { v4: uuidv4 } = require("uuid");




// get all people
function getAllPeople() {
    const people = parseCSV('person')
    return people
}


// Get person by Id
function getPersonById(id) {
    const people = parseCSV('person')

    const person = people.find((person) => person.id === id)
    return person
}

// Person model

function createNewPerson(personData) {
    if (
        !personData.name ||
        !personData.surname ||
        personData.isTeacher === undefined ||
        !personData.birthdate
    ) {
        throw new Error("Missing required fields.");
    }

    const people = parseCSV('person')

    const newPerson = {
        id: uuidv4(),
        name: personData.name,
        surname: personData.surname,
        isTeacher: personData.isTeacher,
        birthdate: personData.birthdate
    };

    people.push(newPerson)

    writeCSV('person', people)

    return newPerson;
}

// Update person

function updatePerson(dataToUpdate) {
    const people = parseCSV('person')

    const personIndex = people.findIndex(
        person => person.id === dataToUpdate.id
    )

    if (personIndex === -1) {
        throw new Error('Person not found')
    }

    people[personIndex] = {
        ...people[personIndex],
        ...dataToUpdate
    }

    writeCSV('person', people)
    
    return people[personIndex]
}

const deletePerson = (req, res) => {
    const people = parseCSV('person')

    const filteredPeople = people.filter(
        person => person.id !== id
    )

    writeCSV('person', filteredPeople)
}


module.exports = {
    getAllPeople,
    createNewPerson,
    getPersonById,
    updatePerson,
    deletePerson
}