const express = require('express')
const router = express.Router()
const { getAllClasses, getClassById, createClass, updateClass, deleteClass, getClassByIdAllInfo, getClassesWithInfo } = require('../controllers/classroom-controller')

// Get All classes
router.get('/', getAllClasses)

router.get('/:id', getClassById)

router.post('/', createClass)

router.put('/:id', updateClass)

router.delete('/:id', deleteClass)

router.get('/class-detail/:id', getClassByIdAllInfo)

router.get('/all-detail', getClassesWithInfo) 
//

module.exports = router
