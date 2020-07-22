import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './components/pages/login';
import Register from './components/pages/register';
import Reset from './components/pages/reset';
import Forgot from './components/pages/forgot';

export default () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/register" component={Register} />
      <Route path="/reset" component={Reset} />
    </Switch>
  )
}