

import { useState, useEffect, useRef } from 'react'
import Exercise from './Exercise'
import '../../index.css'

const SearchExercises = () => {

  const [filters, setFilters] = useState([])
  const [results, setResults] = useState([])

  const chestRef = useRef(null)
  const backRef = useRef(null)
  const legsRef = useRef(null)
  const shouldersRef = useRef(null)
  const armsRef = useRef(null)
  const coreRef = useRef(null)
  const clearRef = useRef(null)


  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    const setFilters = filters
    try {
      const response = await fetch('http://localhost:4000/api/filter', {
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
    if (filters.includes("chest")) {
      chestRef.current.style.backgroundColor = '#82E56C'
      chestRef.current.style.borderColor = 'black'
    } else {
      chestRef.current.style.backgroundColor = 'white'
      chestRef.current.style.borderColor = 'lightgray'

    }
    if (filters.includes("back")) {
      backRef.current.style.backgroundColor = '#82E56C'
      backRef.current.style.borderColor = 'black'

    } else {
      backRef.current.style.backgroundColor = 'white'
      backRef.current.style.borderColor = 'lightgray'

    }
    if (filters.includes("legs")) {
      legsRef.current.style.backgroundColor = '#82E56C'
      legsRef.current.style.borderColor = 'black'

    } else {
      legsRef.current.style.backgroundColor = 'white'
      legsRef.current.style.borderColor = 'lightgray'

    }
    if (filters.includes("shoulders")) {
      shouldersRef.current.style.backgroundColor = '#82E56C'
      shouldersRef.current.style.borderColor = 'black'

    } else {
      shouldersRef.current.style.backgroundColor = 'white'
      shouldersRef.current.style.borderColor = 'lightgray'

    }
    if (filters.includes("arms")) {
      armsRef.current.style.backgroundColor = '#82E56C'
      armsRef.current.style.borderColor = 'black'

    } else {
      armsRef.current.style.backgroundColor = 'white'
      armsRef.current.style.borderColor = 'lightgray'

    }
    if (filters.includes("core")) {
      coreRef.current.style.backgroundColor = '#82E56C'
      coreRef.current.style.borderColor = 'black'

    } else {
      coreRef.current.style.backgroundColor = 'white'
      coreRef.current.style.borderColor = 'lightgray'

    }

    handleSubmit()
  }, [filters])

  const handleFilterAdd = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter(item => item !== filter))
    } else {
      setFilters([...filters, filter])
    }
  }





  return (
    <div className="home">



      <form className="search-exercises-form">
        <div>
          <button type="button" ref={chestRef} onClick={() => handleFilterAdd('chest')}>Chest</button>
          <button type="button" ref={backRef} onClick={() => handleFilterAdd('back')}>Back</button>
          <button type="button" ref={legsRef} onClick={() => handleFilterAdd('legs')}>Legs</button>
        </div>
        <div>
          <button type="button" ref={shouldersRef} onClick={() => handleFilterAdd('shoulders')}>Shoulders</button>
          <button type="button" ref={armsRef} onClick={() => handleFilterAdd('arms')}>Arms</button>
          <button type="button" ref={coreRef} onClick={() => handleFilterAdd('core')}>Core</button>
        </div>
        <button type="button" style={{ backgroundColor: 'rgb(223, 111, 111)   ' }} className="clear-filters-btn" onClick={() => { setFilters([]) }}>Clear</button>
        {/* <button type="submit" onClick={handleSubmit}>Search</button> */}
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