import '../index.css'
import { useState } from "react"
import { useSplitsContext } from '../hooks/useSplitsContext'




const AddSplit = () => {
  const { dispatch } = useSplitsContext()

  const [weekday, setWeekday] = useState('')
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  //add split
  const handleSubmit = async (e) => {
    e.preventDefault()

    const split = { weekday, title }

    const response = await fetch('/api/splits', {
      method: 'POST',
      body: JSON.stringify(split),
      headers: {
        'Content-Type': 'application/json'
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
      dispatch({type: 'CREATE_SPLIT', payload: json })
    }

  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Weekday: </label>
      <input
        type="text"
        onChange={(e) => {
          setWeekday(e.target.value)
        }}
        value={weekday}
      >

      </input>
      <label>
        Title for Split:
      </label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        value={title}
      >
      </input>
      <button type="submit" onClick={handleSubmit}>
        ADD
      </button>
    </form>
  )
}

export default AddSplit