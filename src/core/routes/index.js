import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import GuestRoute from './guest';
import PrivateRoute from './private';
import history from '~/core/history';

// Import Components
import Signin from '~/views/pages/Auth/Signin';
import Dashboard from '~/views/pages/Dashboard';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <GuestRoute exact path="/" component={Signin} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
