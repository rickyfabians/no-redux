import { typeAction } from './reducers/suratReducers'
import axios from 'axios'

export const applyMiddleware = dispatch => action => {
  switch (action.type) {
    case typeAction.LOAD_ALQURAN_SURAT:
      console.log('middleware')
      return loadAlquranSurat(dispatch, action)
  }
}

const loadAlquranSurat = (dispatch, action) => {
  dispatch({type: typeAction.LOAD_ALQURAN_SURAT})
  axios.get(`https://al-quran-8d642.firebaseio.com/surat/${action.payload}.json?print=pretty`)
    .then((res) => {
      dispatch({
        type: typeAction.LOAD_ALQURAN_SURAT_SUCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: typeAction.LOAD_ALQURAN_SURAT_FAIL,
        payload: err
      })
    })
}
