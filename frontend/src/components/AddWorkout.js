
import React, { useState } from 'react';

import '../index.css'
import { useSplitsContext } from '../hooks/useSplitsContext'


const AddWorkout = (split) => {

  const { dispatch } = useSplitsContext()
  const [name, setName] = useState('')
  const [reps, setReps] = useState('')
  const [sets, setSets] = useState('')
  const [weight, setWeight] = useState(0)
  const [bodyWeight, setBodyWeight] = useState(false)



  return (
    <form className="add-workout-form">
      <label>Add a workout:</label>
      <div className="add-workout-pairing">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="add-workout-pairing">
        <label for="sets">Sets:</label>
        <input type="number" id="sets" name="sets" min="1" required />
      </div>
      <div className="add-workout-pairing">
        <label for="reps">Reps:</label>
        <input type="number" id="reps" name="reps" min="1" required />
      </div>
      <div className="add-workout-pairing">
        <label for="weight">Weight (lbs):</label>
        <input type="number" id="weight" name="weight" min="0" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  )

}
export default AddWorkout