import React from 'react'
import { Switch, Route } from 'react-router-dom'
import todos from '../pages/todos'
import count from '../pages/count'
import covid from '../pages/covid'

const DesktopRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/count" exact component={count} />
      <Route path="/todo" component={todos} />
      <Route path="/covid" component={covid} />
    </Switch>
  )
}

export default DesktopRoutes
