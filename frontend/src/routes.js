import React from 'react';
import { Switch } from "react-router-dom";
import PrivateRoute from './components/generic/routes/privateRoute';
import PublicRoute from './components/generic/routes/publicRoute';
import {
  Login,
  Register,
  Reset,
  Forgot,
  Private,
  Public,
} from './components/pages';

export default () => {
  return (
    <Switch>
      <PublicRoute path="/login" component={Login} noAuth/>
      <PublicRoute path="/forgot" component={Forgot} noAuth/>
      <PublicRoute path="/register" component={Register} noAuth/>
      <PublicRoute path="/auth/reset/:uid/:token/" component={Reset} noAuth/>
      <PublicRoute path="/public" component={Public} />

      <PrivateRoute path="/private" component={Private} />
    </Switch>
  )
}