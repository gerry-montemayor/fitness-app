import { SplitsContext } from '../context/SplitContext'
import { useContext } from 'react'

export const useSplitsContext = () => {
  const context = useContext(SplitsContext)

  if (!context) {
    throw Error('useGymsContext must be used inside a SplitsContextProvider')
  }
  return context
}