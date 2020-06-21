import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutTemplate from './templates/LayoutTemplate'
import HomeContainer from './containers/HomeContainer'
import ProfilePage from './pages/ProfilePage'

import Sample from './components/samples/Sample'

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
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/sample" exact component={Sample} />
        </Switch>
      </LayoutTemplate>
    </Router>
  )
}

export default App
