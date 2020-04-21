import React, { useContext, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { StoreContext } from './StoreContext'

function App () {
  const { state, actions } = useContext(StoreContext)
  useEffect(() => {
    actions.loadAlquranSurat('1')
    return () => {}
  }, [])

  useEffect(() => {
    console.log('didupdate user', state)
    return () => {}
  }, [state.user])

  useEffect(() => {
    console.log('didupdate surat', state)
    return () => {}
  }, [state.surat])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
