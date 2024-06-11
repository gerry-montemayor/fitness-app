const Split = require('../models/splitModel')
const Workout = require('../models/workoutModel')

const mongoose = require('mongoose')

//get all splits
const getSplits = async (req,res) => {
  const splits = await Split.find({}).sort({createdAt: -1})
  res.status(200).json(splits)
}

//add an empty split
const addSplit = async (req,res) => {
  const { weekday, title } = req.body
  const split = new Split({
    weekday,
    title, 
    workouts: []
  })
  try {
    await split.save()
    return res.status(200).json(split)
  } catch (error) {
    res.status(400).json({error : error.message})
  }
}

//remove a split
const deleteSplit = async (req,res) => {
  const params = req.params
  const splitId = params.splitId
  if (!mongoose.Types.ObjectId.isValid(splitId)) {
    return res.status(400).json({ error: 'No split found' })
  }
  const split = await Split.findByIdAndDelete({_id: splitId}, {
    ...req.body
  })

  if (!split) {
    return res.status(400).json({error: 'No such split!'})
  }

  res.status(200).json(split)

}

//add an exercise to a split
const addWorkoutToSplit = async (req,res) => {
  const params = req.params
  const splitId = params.splitId
  const { name, reps, sets, weight} = req.body

  try {
    const split = await Split.findById(splitId)

    if (!split) {
      return res.status(400).json({error: 'Split not found'})
    } 
    const workout = new Workout({
      name,
      reps,
      sets,
      weight
    })
    split.workouts.push(workout)
    await split.save()
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

const deleteWorkoutFromSplit = async (req,res) => {
  const splitId = req.params.splitId
  const { workoutId } = req.body
 
  try {
    const updatedSplit = await Split.findByIdAndUpdate(
      splitId,
      { $pull: { workouts: {_id: workoutId}}},
      {new: false}
    );
    // await updatedSplit.save()
    return res.status(200).json(updatedSplit)
  } catch (error) {
    res.status(400).json({error: "Error removing workout"})
  }

}

module.exports = {
  getSplits,
  addSplit,
  addWorkoutToSplit,
  deleteSplit,
  deleteWorkoutFromSplit
}