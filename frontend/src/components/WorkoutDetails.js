import { useSplitsContext } from '../hooks/useSplitsContext'


const WorkoutDetails = ({ workout, splitId }) => {
  const { dispatch } = useSplitsContext()
  const currWorkout = workout.workout
  // const handleClick = async (e) => {
  //   console.log(workout)

  //   // const response = await fetch(`/api/gyms/`)

  //   const gymResponse = await fetch(`/api/gyms/${gymIdentifier}/${workout._id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })

  //   const gymJson = await gymResponse.json()
  //   console.log(gymJson)
  //   console.log("dude")
  //   gymJson.gymId = gymIdentifier
  //   if (gymResponse.ok) {
  //     dispatch({ type: 'DELETE_WORKOUT', payload: {workout: workout.title, gymId: gymIdentifier} })
  //   }
  // }

  return (

    <div className="workout-details" style={{ position: 'relative' }}>
      <span className="material-symbols-outlined" style={{ position: 'absolute', top: '5px', right: '5px', color: 'red'}}>close</span>
      <h3 style={{textAlign: 'center'}} className="align-center">{workout.name}</h3>
      <h4> Sets:  {workout.sets}</h4>
      <h4> Reps: {workout.reps}</h4>
      <h4> Weight: {workout.weight}</h4>

    </div>


  )
}

export default WorkoutDetails