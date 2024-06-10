const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  weight: {
    type: Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function(v) {
        return typeof v === 'string' && v === 'body weight' || typeof v === 'number';
      },
      message: props => `${props.value} is not a valid weight!`
    }
  }
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout