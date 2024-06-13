




const Exercise = ({ exercise }) => {

  return (
    <div className="workout-container">
      <div className="workout-header"><h2>{exercise.name}</h2>
        {exercise.targeted.includes("back") && <div className="emoji">&#127947;</div>}
        {exercise.targeted.includes("arms") && <div className="emoji">&#128170;</div>}
        {exercise.targeted.includes("legs") && <div className="emoji">&#129461;</div>}
      </div>
      <h4>{exercise.description}</h4>
    </div>


  )
}

export default Exercise