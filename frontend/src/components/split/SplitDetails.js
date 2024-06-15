import { useSplitsContext } from "../../hooks/useSplitsContext"
import '../../index.css'
import { useState } from 'react'
import AddWorkout from './AddWorkout'
import WorkoutDetails from './WorkoutDetails'
import { useAuthContext } from "../../hooks/useAuthContext"


const SplitDetails = (split) => {


  const currSplit = split.split
  const { dispatch } = useSplitsContext()
  const { user } = useAuthContext()
  const [showForm, setShowForm] = useState(false)

  const deleteSplit = async (e) => {
    if (!user) {
      return
    }

    e.preventDefault()
    const response = await fetch('/api/splits/' + currSplit._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`

      }
      
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_SPLIT', payload: json })
    }



  }


  return (
    <div className="split-details-container">
      <div className="split-details-header">
        {showForm && <div className="add-workout-popup"> <span id="logo" className="material-symbols-outlined btn" onClick={() => { setShowForm(false) }} >close</span><AddWorkout key={currSplit.name} split={currSplit._id} /></div>}
        <span id="logo" className="material-symbols-outlined delete-split-btn btn" onClick={deleteSplit} >delete</span>
        <h4> {currSplit.weekday}</h4>
        <h4>- {currSplit.title} </h4>
        <span id="logo" className="material-symbols-outlined add-workout-btn btn" onClick={() => { setShowForm(true) }}>add </span>
      </div>
      <div className="split-workouts-container">
        {currSplit.workouts && currSplit.workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} splitId={currSplit._id} />
        ))}
      </div>

    </div >
  )
}

export default SplitDetails