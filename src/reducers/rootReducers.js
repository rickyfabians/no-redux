import combineReducers from './combineReducers'

import user from './userReducers'
import surat from './suratReducers'

export const InitialState = {
  surat: surat.initialState,
  user: user.initialState
}

const reducer = combineReducers({
  user: user.reducer,
  surat: surat.reducer
})

export default reducer
