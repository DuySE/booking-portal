import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={LoginPage} />
  </Switch>
)
export default Routes;
