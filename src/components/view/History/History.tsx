import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import ListItems from './../../smart/ListItems/ListItems';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import Separator from './../../dumb/Separator/Separator';
import Menu from './../../smart/Menu/Menu';
import { fetchWallet } from '../../../redux/actions/walletActions';

const History: FunctionComponent = () => {
  const myWallet = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWallet());
  }, []);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <ListItems items={myWallet.operations} />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default History;
