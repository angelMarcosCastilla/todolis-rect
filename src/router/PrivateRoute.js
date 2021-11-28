import { Redirect, Route } from "wouter"
const user = null

function PrivateRoute({component: Component, ...rest}) {
  
  return (
    <Route {...rest}>
      {
        !user
        ? <Redirect to="/login"/>
        : <Component/>
      }
    </Route>
  )
}

export default PrivateRoute