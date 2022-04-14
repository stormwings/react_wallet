import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './components/view/Dashboard/Dashboard';
import Charge from './components/view/Charge/Charge';
import User from './components/view/User/User';
import TradingList from './components/view/Trading/List';
import TradingPublish from './components/view/Trading/Publish';
import TradingBuy from './components/view/Trading/Buy';
import Login from './components/view/Auth/Login';
import Register from './components/view/Auth/Register';

const Router = () => {
  return (
    <div className="container">
      <div id="responsive--screen">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/charge/:type" component={Charge} />
            <Route exact path="/trading/list" component={TradingList} />
            <Route exact path="/trading/publish" component={TradingPublish} />
            <Route exact path="/trading/buy/:id" component={TradingBuy} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/user" component={User} />

            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;

const NoMatch = () => <Redirect to="/login" />;
