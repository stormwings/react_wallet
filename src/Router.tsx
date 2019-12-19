import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch, BrowserRouterProps } from 'react-router-dom';

import Dashboard from './components/view/Dashboard/Dashboard';

const Router: FunctionComponent<BrowserRouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />

        {/* <Switch>
          <Route path="/promo/:id" component={Dashboard} />
          <Route path="/order/new" component={Dashboard} />
          <Route path="/order/info" component={Dashboard} />
          <Route path="/user/:id/profile" render={props => <UserProfile userId={props.match.params.id} />} /> 
          <Route path="/user/:id/details" render={props => <UserDetails userId={props.match.params.id} />} />
          <Route path="/user/:id/orders" render={props => <UserDetails userId={props.match.params.id} />} /> 
        </Switch> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
