import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Cookies from "js-cookie";

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      Cookies.get('auth_access') ?
        <Component {...props} />
      : <Redirect to="/login" />
    )} />
  )
}

export default PrivateRoute;