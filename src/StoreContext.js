import React, { createContext, useReducer } from 'react'
import rootReducer, { InitialState } from './reducers/rootReducers'
import { useActions } from './action'
import { applyMiddleware } from './middleware'

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, InitialState)

  const enhancedDispatch = applyMiddleware(dispatch)
  const actions = useActions(state, enhancedDispatch, dispatch)
  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider }
