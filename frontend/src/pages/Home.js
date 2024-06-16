import '../index.css'
import { useEffect, useState } from 'react'
import { useSplitsContext } from '../hooks/useSplitsContext'
import AddSplit from '../components/split/AddSplit'
import SplitDetails from '../components/split/SplitDetails'
import { useAuthContext } from '../hooks/useAuthContext'


const Home = () => {
  const { state, dispatch } = useSplitsContext()
  const { splits } = state
  const { user } = useAuthContext()


  useEffect(() => {
    const fetchSplits = async () => {
      const response = await fetch('http://localhost:4000/api/splits', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_SPLITS', payload: json })
      }
    }
    if (user) {
      fetchSplits()
    }
  }, [dispatch, user])

  return (

    <div className="home">

      <AddSplit />


      <div className="splits">
        {splits && splits.map((split) => (
          <SplitDetails key={split._id} split={split} />
        ))}
      </div>



    </div>
  )
}

export default Home