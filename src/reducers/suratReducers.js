export const initialState = {
  loading: false,
  data: null,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.LOAD_ALQURAN_SURAT_SUCESS:
      return { ...state, data: action.payload, loading: false }
    case typeAction.LOAD_ALQURAN_SURAT_FAIL:
      return { ...state, loading: false, error: action.payload }
    case typeAction.LOAD_ALQURAN_SURAT:
      return { ...state, loading: true }
    default:
      return state
  }
}

export const typeAction = {
  LOAD_ALQURAN_SURAT: 'LOAD_ALQURAN_SURAT',
  LOAD_ALQURAN_SURAT_SUCESS: 'LOAD_ALQURAN_SURAT_SUCESS',
  LOAD_ALQURAN_SURAT_FAIL: 'LOAD_ALQURAN_SURAT_FAIL'
}

export default { initialState, reducer, typeAction }
