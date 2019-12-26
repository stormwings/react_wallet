import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.scss';

import { fetchWallet } from './../../../redux/actions/walletActions';

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import CurrencyStatus from './../../../components/dumb/CurrencyStatus/CurrencyStatus';
import Separator from './../../../components/dumb/Separator/Separator';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import ListItems from './../../smart/ListItems/ListItems';
import Menu from './../../smart/Menu/Menu';

const Dashboard: FunctionComponent = () => {
  const dispatch = useDispatch();

  // fetch and show main information
  const {
    auth: { user_id },
    wallet
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, []);

  const lastItems = wallet.operations.slice(1, 5);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={wallet.currency.BTC} fiatValue={wallet.currency.USD} />
      <ScreenContainer>
        <div className="card--header__currencies">
          <CurrencyStatus
            principalValue={`${wallet.currency.USD} USD`}
            secondaryValue={`BTC ${wallet.currency.BTC}`}
            principalIcon="bitcoin"
          />
          <CurrencyStatus
            principalValue={`BTC ${wallet.currency.BTC}`}
            secondaryValue={`${wallet.currency.USD} USD`}
            principalIcon="bitcoin"
          />
        </div>
        <Separator className="medium" />
        <ListItems items={lastItems} />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default Dashboard;
