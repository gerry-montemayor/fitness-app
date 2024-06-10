
const {
  getSplits,
  addSplit,
  addWorkoutToSplit,
  deleteSplit
} = require('../controllers/splitController')

const express = require('express')


const router = express.Router()

//get all splits
router.get('/splits', getSplits)

//add a new split
router.post('/splits', addSplit)

//delete a new split
router.delete('/splits/:splitId', deleteSplit)

//add a workout to split by id
router.post('/splits/:splitId', addWorkoutToSplit)


module.exports = router

