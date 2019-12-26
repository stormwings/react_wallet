import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWallet } from './../../../redux/actions/walletActions';

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import CurrencyStatus from './../../../components/dumb/CurrencyStatus/CurrencyStatus';
import Separator from './../../../components/dumb/Separator/Separator';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import ListItems from './../../smart/ListItems/ListItems';
import Menu from './../../smart/Menu/Menu';
import { useHistory } from 'react-router-dom';

const Dashboard: FunctionComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // fetch and show main information
  const {
    auth: { user_id },
    wallet
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, []);

  const operations = wallet.operations.filter((operation: any) => operation.user == user_id).slice(0, 5);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={wallet.currency.BTC} fiatValue={wallet.currency.USD} />
      <ScreenContainer>
        <ListItems items={operations} includeSpan onClickSpan={() => history.push('/history')} />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default Dashboard;
