import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NavBar from './components/NavBar'

import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
      </div>
    </Router>
  )
}

export default App
