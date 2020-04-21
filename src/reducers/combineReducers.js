// const combineReducers = (reducers) => (state = {}, action) => {
//     const newState = {};
//     for (let key in reducers) {
//       newState[key] = reducers[key](state[key], action);
//     }
//     return newState;
// }
const combineReducers = reducers => (state, action) => {
  let hasChanged
  const nextState = Object.keys(reducers).reduce((result, key) => {
    result[key] = reducers[key](state[key], action) || state
    hasChanged = hasChanged || result[key] !== state[key]
    return result
  }, {})
  return hasChanged ? nextState : state
}

export default combineReducers
