

import { useState, useEffect } from 'react'
import Exercise from './Exercise'

const SearchExercises = () => {

  const [filters, setFilters] = useState([])
  const [results, setResults] = useState([])



  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    const setFilters = filters
    try {
      const response = await fetch('/api/filter', {
        method: 'POST',
        body: JSON.stringify({ filters: setFilters }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      setResults(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [filters])


  return (
    <div className="search">
      


      <form className="search-exercises-form">
        <button type="button" onClick={() => setFilters([...filters, 'chest'])}>Chest</button>
        <button type="button" onClick={() => setFilters([...filters, 'back'])}>Back</button>
        <button type="button" onClick={() => setFilters([...filters, 'legs'])}>Legs</button>
        <button type="button" onClick={() => setFilters([...filters, 'shoulders'])}>Shoulders</button>
        <button type="button" onClick={() => setFilters([...filters, 'arms'])}>Arms</button>
        <button type="button" onClick={() => setFilters([...filters, 'core'])}>Core</button>
        <button type="button" onClick={() => { setFilters([]) }}>Clear</button>
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>

      <div className="search-results">
        {results.map((result, index) => (
          <Exercise key={index} exercise={result} />
        ))}
      </div>



    </div>
  )
}


export default SearchExercises