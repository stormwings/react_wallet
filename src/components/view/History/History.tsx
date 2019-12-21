import React, { FunctionComponent, Fragment } from 'react';
import { useSelector } from 'react-redux';

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import ListItems from './../../smart/ListItems/ListItems';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import Separator from './../../dumb/Separator/Separator';
import Menu from './../../smart/Menu/Menu';

const History: FunctionComponent = () => {
  const myWallet = useSelector((state: any) => state.wallet);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <ListItems />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default History;
