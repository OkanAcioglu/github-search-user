import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

//! Ones we logout, we kick back to login page. Eventhough we know that dashboard is essentially our homepage, if we trying to get there (since we do not logged in) we being kicked back to a login page. We only can access to the dashboard if we are login.
//! Firstly we need to setup private root.
//! Dashboard will be wrapped by private route.

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to='/login'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute
