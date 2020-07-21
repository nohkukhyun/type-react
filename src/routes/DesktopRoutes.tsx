import React from "react"
import { Switch, Route } from "react-router-dom"
import todos from "../pages/todos"

const DesktopRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={todos} />
    </Switch>
  )
}

export default DesktopRoutes
