import '../../index.css'
import { useState } from "react"
import { useSplitsContext } from '../../hooks/useSplitsContext'
import { useAuthContext } from '../../hooks/useAuthContext'



const AddSplit = () => {
  const { dispatch } = useSplitsContext()
  const { user } = useAuthContext()

  const [weekday, setWeekday] = useState('')
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')



  //add split
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      setError('You must be logged in')
      return
    }

    const split = { weekday, title }

    const response = await fetch('/api/splits', {
      method: 'POST',
      body: JSON.stringify(split),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`


      }
    })
    const json = await response.json()
    console.log(json)

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setTitle('')
      setWeekday('')
      setError(null)
      dispatch({ type: 'CREATE_SPLIT', payload: json })
    }

  }


  return (
    <form className="add-split-form" onSubmit={handleSubmit}>
      <div className="form-pairing">
        <label>Day of Week:</label>
        <select
          onChange={(e) => setWeekday(e.target.value)}
          selected value={weekday}>
          <option value=""> </option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <div className="form-pairing">
        <label>
          Name:
        </label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          value={title}
        >
        </input>
      </div>
      <button className="submit-split-btn" type="submit" onClick={handleSubmit}>
        ADD
      </button>
    </form>
  )
}

export default AddSplit