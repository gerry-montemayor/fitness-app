import React, { useState } from 'react';
import { useSplitsContext } from '../../hooks/useSplitsContext'
import '../../index.css'


const AddWorkoutForm = (split) => {
  const splitId = split.split
  const { dispatch } = useSplitsContext();
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState(0);
  const [bodyWeight, setBodyWeight] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWorkout = {
      name,
      reps,
      sets,
      weight,
      bodyWeight
    };

    const response = await fetch(`/api/splits/${splitId}`, {
        method: 'POST',
        body: JSON.stringify(newWorkout),
        headers: {
          'Content-Type': 'application/json'
        }
    })

    const json = await response.json()
    if (response.ok) {
      console.log("reached")
      dispatch({type: 'ADD_WORKOUT', payload: {...json, "splitId": splitId}})

    }

    // Clear the form
    setName('');
    setReps('');
    setSets('');
    setWeight(0);
    setBodyWeight(false);
  };

  return (
    <form className="add-workout-form" onSubmit={handleSubmit}>
      <label>Add a workout:</label>
      <div className="add-workout-pairing">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{width: '150px'}}
        />
      </div>
      <div className="add-workout-pairing">
        <label htmlFor="sets">Sets:</label>
        <input
          type="number"
          id="sets"
          name="sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          min="1"
          required
        />
      </div>
      <div className="add-workout-pairing">
        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          id="reps"
          name="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          min="1"
          required
        />
      </div>
      <div className="add-workout-pairing">
        <label htmlFor="weight">Weight (lbs):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="0"
          required
        />
      </div>
     
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddWorkoutForm;
