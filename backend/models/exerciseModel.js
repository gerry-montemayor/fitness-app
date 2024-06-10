const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  targeted: {
    type: [String],
    required: true,
    enum: ['chest', 'back', 'legs', 'shoulders', 'arms', 'core']
  }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise
