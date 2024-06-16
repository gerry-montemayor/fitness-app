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


const addExercises = async (req, res) => {
  const { exercises } = req.body;

  // Ensure exercises is an array
  if (!Array.isArray(exercises)) {
    return res.status(400).json({ error: 'Invalid input: exercises must be an array' });
  }

  try {
    // Use Promise.all to save all exercises concurrently
    const savedExercises = await Promise.all(
      exercises.map(async (exerciseData) => {
        const { name, description, targeted } = exerciseData;
        const exercise = new Exercise({ name, description, targeted });
        return await exercise.save();
      })
    );

    return res.status(200).json(savedExercises);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
  addExercises,
  getFilteredExercises
}