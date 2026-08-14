const express = require('express')
const router = express.Router()
const { getAllClasses, getClassById, createClass, updateClass, deleteClass, getClassByIdAllInfo, getAllClassesAllInfo } = require('../controllers/classroom-controller')

// Get All classes
router.get('/all', getAllClassesAllInfo) 
router.get('/all/:id', getClassByIdAllInfo)
router.get('/', getAllClasses)
router.get('/:id', getClassById)
router.post('/', createClass)
router.put('/:id', updateClass)
router.delete('/:id', deleteClass)

//

module.exports = router
