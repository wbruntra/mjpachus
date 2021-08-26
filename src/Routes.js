import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import Gallery from './Gallery'

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/gallery/:galleryId">
            <Gallery />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
