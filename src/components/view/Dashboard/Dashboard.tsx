import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.scss';

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import CurrencyStatus from './../../../components/dumb/CurrencyStatus/CurrencyStatus';
import Separator from './../../../components/dumb/Separator/Separator';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import ListItems from './../../smart/ListItems/ListItems';
import Menu from './../../smart/Menu/Menu';
import { fetchWallet } from '../../../redux/actions/walletActions';

const Dashboard: FunctionComponent = () => {
  const myWallet = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWallet());
  }, []);

  const lastItems = myWallet.operations.slice(1, 5);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <div className="card--header__currencies">
          <CurrencyStatus
            principalValue={`${myWallet.currency.USD} USD`}
            secondaryValue={`BTC ${myWallet.currency.BTC}`}
            principalIcon="bitcoin"
          />
          <CurrencyStatus
            principalValue={`BTC ${myWallet.currency.BTC}`}
            secondaryValue={`${myWallet.currency.USD} USD`}
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
