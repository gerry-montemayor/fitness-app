import { useSplitsContext } from "../hooks/useSplitsContext"
import '../index.css'

const Splits = (split) => {
  const currSplit = split.split
  const { dispatch } = useSplitsContext()

  return (
    <div className="split-details-container">
      <h3> Split: {currSplit.title} </h3>
      <h3> Day: {currSplit.weekday} </h3> 
    </div>
  )
}

export default Splits