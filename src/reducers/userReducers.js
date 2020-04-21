export const typeAction = {
  LOAD_USER_INFO: 'LOAD_USER_INFO',
  LOAD_USER_INFO_SUCESS: 'LOAD_USER_INFO_SUCESS',
  LOAD_USER_INFO_FAIL: 'LOAD_USER_INFO_FAIL'
}

export const initialState = {
  loading: false,
  data: null,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.LOAD_USER_INFO_SUCESS:
      return { ...state, data: action.payload, loading: false }
    case typeAction.LOAD_USER_INFO_FAIL:
      return { ...state, loading: false, error: action.payload }
    case typeAction.LOAD_USER_INFO:
      return { ...state, loading: true }
    default:
      return state
  }
}

export default { initialState, reducer, typeAction }
