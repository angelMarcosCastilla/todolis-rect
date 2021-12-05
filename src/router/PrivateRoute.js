import { Redirect, Route } from "wouter"
import useUser from "hooks/useUser"

function PrivateRoute({component: Component, ...rest}) {
  const {user} = useUser()

  if(user === undefined) return null
  if(!user) return <Redirect to="/login"/>

  return (
    <Route component={Component} {...rest}/>
  )
}

export default PrivateRoute