import '../index.css'
import { useEffect, useState } from 'react'
import { useSplitsContext } from '../hooks/useSplitsContext'
import AddSplit from '../components/AddSplit'
import SplitDetails from '../components/SplitDetails'


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

      <div className="form-container">
        <AddSplit />
      </div>

      <div className="splits">
        {splits && splits.map((split) => (
          <SplitDetails key={split._id} split={split} />
        ))}
      </div>



    </div>
  )
}

export default Home