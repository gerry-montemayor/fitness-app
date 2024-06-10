

import { useState } from 'react'


const SearchExercises = () => {

  const [filters, setFilters] = useState([])
  const [results, setResults] = useState([])



  const handleSubmit = async (e) => {
    e.preventDefault()
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



  return (
    <div className="search">
      <div className="set-filters">
        {filters.map((filter) => (
          <li key={filter.id}>
            {filter}
          </li>))}
      </div>


      <form>
        <button type="button" onClick={() => setFilters([...filters, 'chest'])}>Chest</button>
        <button type="button" onClick={() => setFilters([...filters, 'back'])}>Back</button>
        <button type="button" onClick={() => setFilters([...filters, 'legs'])}>Legs</button>
        <button type="button" onClick={() => setFilters([...filters, 'shoulders'])}>Shoulders</button>
        <button type="button" onClick={() => setFilters([...filters, 'arms'])}>Arms</button>
        <button type="button" onClick={() => setFilters([...filters, 'core'])}>Core</button>
        <button type="button" onClick={() => {setFilters([])}}>Clear</button>
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>

      <div className="search-results">
        {results.map((result) => (
          <div key={result}>
            <h3>{result.name}</h3>
            <p> {result.description}</p>
          </div>))}
      </div>



    </div>
  )
}


export default SearchExercises