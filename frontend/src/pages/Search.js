import '../index.css'
import { useEffect, useState } from 'react'
import { useSplitsContext } from '../hooks/useSplitsContext'
import SearchExercises from '../components/search/SearchExercises'


const Home = () => {
  const { state, dispatch } = useSplitsContext()
  const { splits } = state

  useEffect(() => {
    const fetchSplits = async () => {
      const response = await fetch('/api/splits')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_SPLITS', payload: json })
      }
    }
    fetchSplits()
  }, [dispatch])

  return (

    <div className="home">

       <SearchExercises/>



    </div>
  )
}

export default Home