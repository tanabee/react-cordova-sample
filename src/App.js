import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React x Cordova!</p>
        <p>Device model is {window.device ? window.device.model : 'Unknown'}</p>
      </header>
    </div>
  )
}

export default App
