import { useSplitsContext } from "../hooks/useSplitsContext"
import '../index.css'
import { useState } from 'react'
import AddWorkout from './AddWorkout'

const SplitDetails = (split) => {

  const currSplit = split.split
  const { dispatch } = useSplitsContext()
  const [showForm, setShowForm] = useState(false)

  const deleteSplit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/splits/' + currSplit._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_SPLIT', payload: json })
    }



  }


  return (
    <div className="split-details-container">
      <button onClick={() => { setShowForm(true) }}></button>
      {showForm && <div className="add-workout-popup"> <span id="logo" className="material-symbols-outlined" onClick={()=> {setShowForm(false)}} >close</span><AddWorkout key={currSplit.name} split={split} /></div>}
      <span id="logo" className="material-symbols-outlined" onClick={deleteSplit} >delete</span>
      <h4> {currSplit.weekday} - {currSplit.title} </h4>
    </div>
  )
}

export default SplitDetails