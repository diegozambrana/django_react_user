import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Cookies from "js-cookie";

const PublicRoute = ({component: Component, noAuth, ...rest}) => {
  console.log('isLogin');

  return (
    <Route {...rest} render={props => (
      !noAuth || !Cookies.get('auth_access') ?
        <Component {...props} />
      : <Redirect to="/private" />
    )} />
  )
}

export default PublicRoute;