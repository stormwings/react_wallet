import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWallet } from './../../../redux/actions/walletActions';
import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import ListItems from './../../smart/ListItems/ListItems';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import Separator from './../../dumb/Separator/Separator';
import Menu from './../../smart/Menu/Menu';

const History: FunctionComponent = () => {
  const dispatch = useDispatch();

  // fetch and show main information
  const {
    auth: { user_id },
    wallet
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, []);

  const operations = wallet.operations.filter((operation: any) => operation.user == user_id);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={wallet.currency.BTC} fiatValue={wallet.currency.USD} />
      <ScreenContainer>
        <ListItems items={operations} />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default History;
