import { Redirect, Route } from "wouter"
import useUser from "hooks/useUser"

function PrivateRoute({component: Component, ...rest}) {
  const {user} = useUser()
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