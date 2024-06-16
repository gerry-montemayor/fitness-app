
const {
  getExercises,
  addExercise,
  addExercises,
  getFilteredExercises
} = require('../controllers/exerciseController')

const express = require('express')


const router = express.Router()

//get all exercises
router.get('/exercises', getExercises)

//add an exercise 
router.post('/exercises', addExercises)

//get filtered exercises
router.post('/filter', getFilteredExercises)


module.exports = router