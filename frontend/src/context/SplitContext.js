import { createContext, useReducer } from 'react';

export const SplitsContext = createContext()

export const splitReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SPLITS':
      return {
        splits: action.payload
      }
    case 'CREATE_SPLIT':
      return {
        splits: [...state.splits, action.payload]
      }
    // case 'DELETE_WORKOUT':
    //   console.log(action.payload)
    //   const updated = state.gyms.map((gym) => {
    //     if (gym._id === action.payload.gymId) {
    //       console.log("WHOA")
    //       return {
    //         ...gym,
    //         workouts: gym.workouts.filter((workout) => workout.title !== action.payload.workout)
    //       };
    //     }
    //     return gym;
    //   });

    //   return {
    //     gyms: [...updated]
    //   };
    // case 'ADD_WORKOUT':
    //   const workout = action.payload;
    //   const gymId = workout.gym;
    //   delete workout.name
    //   delete workout.gym


    //   const updatedGyms = state.gyms.map((gym) => {
    //     if (gym._id === gymId) {
    //       gym.workouts.push(workout)
    //       return gym
    //       // const newGym = JSON.parse(gym);
    //       // newGym.workouts.push(workout)
    //       // JSON.stringify(newGym)
    //       // return newGym
    //     } else {
    //       return gym
    //     }
    //   })
    //   console.log(updatedGyms)
    //   return {
    //     gyms: [...updatedGyms]
    //   }

    case 'DELETE_SPLIT':
      return {
        splits: state.splits.filter(split => split._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const SplitsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(splitReducer, {
    splits: []
  })


  return (
    <SplitsContext.Provider value={{ state, dispatch }}>
      {children}
    </SplitsContext.Provider>
  )
}