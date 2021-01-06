import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutTemplate from './templates/LayoutTemplate'
import HomeContainer from './containers/HomeContainer'
import ProfilePage from './pages/ProfilePage'
import SignupPage from './pages/SignupPage'

import Sample from './components/samples/Sample'

import './App.scss'

function App() {
  useEffect(() => {
    const { gapi } = window as any
    gapi.load('auth2', () => ({
      client_id: process.env.REACT_APP_GOOGLE_GLIENT_ID
    }))
  }, [])

  return (
    <Router>
      <LayoutTemplate>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/likes" exact component={HomeContainer} />
          <Route path="/blogs" exact component={HomeContainer} />
          <Route path="/photos" exact component={HomeContainer} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/sample" exact component={Sample} />
        </Switch>
      </LayoutTemplate>
    </Router>
  )
}

export default App
