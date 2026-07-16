const express = require('express')
const app = express()
const { parseCSV, writeCSV } = require('./csv')
const personRouter = require('./routes/personRouter.js')
const classroomRouter = require('./routes/classroomRouter.js')

const port = process.env.PORT || 3000

app.use(express.json())


app.use('/person', personRouter)
app.use('/classroom', classroomRouter)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})



// Testing parse and write functions
// const result = parseCSV('./data/person.csv')
// console.log(result)

// const data = [
//   {
//     "Id": 16,
//     "Name": "Ethan",
//     "Surname": "Harris",
//     "IsTeacher": false,
//     "Birthdate": "2005-11-12"
//   },
//   {
//     "Id": 17,
//     "Name": "Charlotte",
//     "Surname": "Clark",
//     "IsTeacher": true,
//     "Birthdate": "1983-06-24"
//   },
//   {
//     "Id": 18,
//     "Name": "Benjamin",
//     "Surname": "Lewis",
//     "IsTeacher": false,
//     "Birthdate": "2004-08-19"
//   },
//   {
//     "Id": 19,
//     "Name": "Amelia",
//     "Surname": "Walker",
//     "IsTeacher": false,
//     "Birthdate": "2006-02-07"
//   },
//   {
//     "Id": 20,
//     "Name": "Lucas",
//     "Surname": "Hall",
//     "IsTeacher": true,
//     "Birthdate": "1979-09-30"
//   }
// ]

// writeCSV('./data/person.csv', data)