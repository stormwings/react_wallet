import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch, BrowserRouterProps } from 'react-router-dom';

import Dashboard from './components/view/Dashboard/Dashboard';
import Auth from './components/view/Auth/Auth';
import Charge from './components/view/Charge/Charge';
import History from './components/view/History/History';
import User from './components/view/User/User';
import TradingList from './components/view/Trading/List';
import TradingPublish from './components/view/Trading/Publish';
import TradingBuy from './components/view/Trading/Buy';

const Router: FunctionComponent<BrowserRouterProps> = () => {
  return (
    <div className="container">
      <div id="responsive--screen">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/auth/:type" component={Auth} />
            <Route exact path="/charge/:type" component={Charge} />
            <Route exact path="/trading/list" component={TradingList} />
            <Route exact path="/trading/publish" component={TradingPublish} />
            <Route exact path="/trading/buy/:id" component={TradingBuy} />
            <Route exact path="/history" component={History} />
            <Route exact path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
