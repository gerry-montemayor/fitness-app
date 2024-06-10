const Exercise = require('../models/exerciseModel')

const mongoose = require('mongoose')


//get all exercises
const getExercises = async (req, res) => {
  const exercises = await Exercise.find({}).sort({ createdAt: -1 })
  res.status(200).json(gyms)
}

//add an exercise
const addExercise = async (req, res) => {
  const { name, description, targeted } = req.body
  const exercise = new Exercise({
    name, description, targeted
  })
  try {
    await exercise.save()
    return res.status(200).json(exercise)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//get filtered exercises, request has list of targeted muscle groups
const getFilteredExercises = async (req, res) => {
  const filters = req.body.filters
  try {
    const exercises = await Exercise.find({ targeted: { $all: filters } });
    res.status(200).json(exercises)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
}


module.exports = {
  getExercises,
  addExercise,
  getFilteredExercises
}