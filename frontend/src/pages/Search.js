import '../index.css'
import { useEffect, useState } from 'react'
import { useSplitsContext } from '../hooks/useSplitsContext'
import SearchExercises from '../components/search/SearchExercises'


const Home = () => {
  const { state, dispatch } = useSplitsContext()
  const { splits } = state

  

  return (

    <div className="home">

       <SearchExercises/>



    </div>
  )
}

export default Home