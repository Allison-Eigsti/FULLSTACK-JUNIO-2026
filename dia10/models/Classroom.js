const { parseCSV, writeCSV } = require('../csv.js')
const personModel = require('../models/Person')
const { v4: uuidv4 } = require("uuid");

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
        students: classData.students.join(";")
    };

    const people = parseCSV("person");

    // const teacher = people.find(
    //     person => person.id === classData.teacherId && person.isTeacher == "true"
    // );

    // if (!teacher) {
    //     throw new Error("Teacher does not exist.");
    // }

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


function updateClass(classData) {
    const classes = parseCSV("classrooms");
    const people = parseCSV("person");

    console.log("ID from request:", classData.id);
    console.log("Classes:", classes.map(c => c.id));

    const classIndex = classes.findIndex(
        singleClass => singleClass.id === classData.id
    );

    if (classIndex === -1) {
        throw new Error("Class not found.");
    }

    // Validate teacher if teacherId is being changed
    // if (classData.teacherId) {
    //     const teacher = people.find(
    //         person =>
    //             person.id === classData.teacherId &&
    //             (person.isTeacher === true || person.isTeacher === "true")
    //     );

    //     if (!teacher) {
    //         throw new Error("Teacher does not exist.");
    //     }
    // }

    // Convert students array to a string before saving
    const updatedData = {
        ...classData
    };

    if (Array.isArray(updatedData.students)) {
        updatedData.students = updatedData.students.join(";");
    }

    classes[classIndex] = {
        ...classes[classIndex],
        ...updatedData
    };

    writeCSV("classrooms", classes);

    return classes[classIndex];
}

function deleteClass(id) {
    const classes = parseCSV('classrooms')

    const filteredClasses = classes.filter((singleClass) => singleClass.id !== id)

    writeCSV('classrooms', filteredClasses)

    return filteredClasses
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