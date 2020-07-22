import React from 'react';
import { Switch, Route } from "react-router-dom";

import {
  Login,
  Register,
  Reset,
  Forgot,
} from './components/pages';

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