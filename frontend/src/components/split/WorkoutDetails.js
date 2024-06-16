import { useSplitsContext } from '../../hooks/useSplitsContext'
import '../../index.css'
import { useAuthContext } from '../../hooks/useAuthContext'

const WorkoutDetails = ({ workout, splitId }) => {
  const { dispatch } = useSplitsContext()
  const { user } = useAuthContext()
  const handleClick = async (e) => {

    // const response = await fetch(`/api/gyms/`)
    console.log(splitId)
    console.log(workout)
    const response = await fetch(`http://localhost:4000/api/splits/delete/${splitId}`, {
      method: 'DELETE',
      body: JSON.stringify({ "workoutId": workout._id }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`

      }
    })

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: { workoutId: workout._id, splitId: splitId } })
    }
  }

  return (

    <div className="workout-details" style={{ position: 'relative' }}>
      <span className="material-symbols-outlined" onClick={handleClick} style={{ position: 'absolute', top: '5px', right: '5px', color: 'red' }}>close</span>
      <h3 style={{ textAlign: 'center' }} className="align-center">{workout.name}</h3>
      <h4> Sets:  {workout.sets}</h4>
      <h4> Reps: {workout.reps}</h4>
      <h4> Weight: {workout.weight}</h4>

    </div>


  )
}

export default WorkoutDetails