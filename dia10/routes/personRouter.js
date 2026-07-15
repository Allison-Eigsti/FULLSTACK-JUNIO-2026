const express = require('express')
const router = express.Router()
const personController = require('../controllers/person-controller')


// People Routes

router.get('/', personController.getAllPeople)
router.get('/:id', personController.getPersonById)
router.post('/', personController.createPerson)
router.put('/:id', personController.updatePerson)
router.delete('/:id', personController.deletePerson)

module.exports = router