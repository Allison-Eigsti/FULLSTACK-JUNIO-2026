const personModel = require('../models/Person')
const classModel = require('../models/Classroom')


const getAllClasses = (req, res) => {
    try {
        const classes = classModel.getAllClasses()

        res.status(200).json(classes)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

const getClassById = (req, res) => {
    try {
        const singleClass = classModel.getClassById(req.params.id)

        res.status(200).json(singleClass)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}



const createClass = (req, res) => {
    try {
        const newClass = classModel.createClass(req.body)

        res.status(201).json(newClass)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}



const updateClass = (req, res) => {
    try {
        const updatedClass = classModel.updateClass({
            id: req.params.id,
            ...req.body
        })

        res.status(200).json(updatedClass)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteClass = (req, res) => {
    try {
        const filteredClasses = classModel.deleteClass(req.params.id)

        res.status(200).json(filteredClasses)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

const getClassByIdAllInfo = (req, res) => {
    try {
        const singleClass = classModel.getClassById(req.params.id);

        if (!singleClass) {
            return res.status(404).json({ error: "Class not found" });
        }

        const people = personModel.getAllPeople();

        // Find the teacher
        const teacher = people.find(
            person => person.id === singleClass.teacherId
        );

        // Find all students
        const studentIds = singleClass.students.split(";");

        const students = people.filter(person =>
            studentIds.includes(person.id)
        );

        const classWithInfo = {
            id: singleClass.id,
            name: singleClass.name,
            teacher,
            students
        };

        res.status(200).json(classWithInfo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass,
    getClassByIdAllInfo
}