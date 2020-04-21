import { typeAction } from './reducers/suratReducers'

export const useActions = (state, dispatch) => ({
  loadAlquranSurat: data => {
    console.log('action')
    dispatch({ type: typeAction.LOAD_ALQURAN_SURAT, payload: data })
  }
})
