import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import UserContent from './pages/UserContent'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:user" component={UserContent} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
