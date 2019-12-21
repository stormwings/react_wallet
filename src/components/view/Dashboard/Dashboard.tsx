import React, { FunctionComponent, Fragment } from 'react';
import './Dashboard.scss';

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import CurrencyStatus from './../../../components/dumb/CurrencyStatus/CurrencyStatus';
import Separator from './../../../components/dumb/Separator/Separator';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import ListItems from './../../smart/ListItems/ListItems';
import Menu from './../../smart/Menu/Menu';

const Dashboard: FunctionComponent = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader />
      <ScreenContainer>
        <div className="card--header__currencies">
          <CurrencyStatus principalValue="BTC 0,10458" secondaryValue="48.000,32ARS" principalIcon="bitcoin" />
          <CurrencyStatus principalValue="BTC 0,10458" secondaryValue="48.000,32ARS" principalIcon="bitcoin" />
        </div>
        <Separator className="medium" />
        <ListItems />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default Dashboard;
