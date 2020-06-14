import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutTemplate from './templates/LayoutTemplate'

import HomeContainer from './containers/HomeContainer'

import './App.scss'

function App() {
  return (
    <Router>
      <LayoutTemplate>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/likes" exact component={HomeContainer} />
          <Route path="/blogs" exact component={HomeContainer} />
          <Route path="/photos" exact component={HomeContainer} />
        </Switch>
      </LayoutTemplate>
    </Router>
  )
}

export default App
