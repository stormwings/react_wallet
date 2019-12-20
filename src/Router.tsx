import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch, BrowserRouterProps } from 'react-router-dom';

import Dashboard from './components/view/Dashboard/Dashboard';
import Auth from './components/view/Auth/Auth';
import Charge from './components/view/Charge/Charge';
import History from './components/view/History/History';
import User from './components/view/User/User';

const Router: FunctionComponent<BrowserRouterProps> = () => {
  return (
    <div className="container">
      <div id="responsive--screen">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/auth/:type" component={Auth} />
            <Route exact path="/charge" component={Charge} />
            <Route exact path="/history" component={History} />
            <Route exact path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
