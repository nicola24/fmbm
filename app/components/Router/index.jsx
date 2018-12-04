import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../Login';
import EmployeeDashboard from '../EmployeeDashboard';
import EmployerDashboard from '../../containers/EmployerDashboard';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/employee" component={EmployeeDashboard} />
      <Route exact path="/employer" component={EmployerDashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;
