
const {
  getExercises,
  addExercise,
  getFilteredExercises
} = require('../controllers/exerciseController')

const express = require('express')


const router = express.Router()

//get all exercises
router.get('/exercises', getExercises)

//add an exercise 
router.post('/exercises', addExercise)

//get filtered exercises
router.post('/filter', getFilteredExercises)


module.exports = router