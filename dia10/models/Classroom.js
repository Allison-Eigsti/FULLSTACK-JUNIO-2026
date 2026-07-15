const { parseCSV, writeCSV } = require('../csv.js')
const personModel = require('../models/Person')

// get all classes 

function getAllClasses() {
    const classes = parseCSV('classrooms')
    return classes
}


function getClassById(id) {
    const classes = parseCSV('classrooms')

    const singleClass = classes.find((singleClass) => singleClass.id === id)
    return singleClass
}


function createClass(classData) {
    if (
        !classData.name ||
        !classData.teacherId ||
        !classData.students
    ) {
        throw new Error("Missing required fields.");
    }

    const classes = parseCSV('classrooms')

    const newClass = {
        id: uuidv4(),
        name: classData.name,
        teacherId: classData.teacherId,
        students: classData.students
    };

    const people = parseCSV("people");

    const teacher = people.find(
        person => person.id === classData.teacherId && person.isTeacher === true
    );

    if (!teacher) {
        throw new Error("Teacher does not exist.");
    }

    // const invalidStudents = classData.students.filter(studentId =>
    //     !people.some(
    //         person => person.id === studentId && person.role === "student"
    //     )
    // );

    // if (invalidStudents.length > 0) {
    //     throw new Error(
    //         `Invalid student IDs: ${invalidStudents.join(", ")}`
    //     );
    // }

    classes.push(newClass)

    writeCSV('classrooms', classes)

    return newClass;
}


module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass
}

// TO DO
// test the first 3 routes, finish the controllers and the routes and connect class router to index