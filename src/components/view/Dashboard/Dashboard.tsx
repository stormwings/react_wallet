import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchWallet } from './../../../redux/actions/walletActions';

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import Separator from './../../../components/dumb/Separator/Separator';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import ListItems from './../../smart/ListItems/ListItems';
import Menu from './../../smart/Menu/Menu';

import { ResultOperation } from './../../../entities/Operation'

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    auth: { user_id },
    wallet
  } = useSelector((state: any) => state);

  React.useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, [user_id, dispatch]);

  const findOperationsByUser = (operation: ResultOperation, userId: number) => operation.user === userId

  const operations = wallet.operations.filter(findOperationsByUser);

  return (
    <>
      <HeaderContainer />
      <StatusHeader cryptoValue={wallet.currency.BTC} fiatValue={wallet.currency.USD} />
      <ScreenContainer>
        <ListItems items={operations} includeSpan onClickSpan={() => history.push('/history')} />
        <Separator />
        <Menu />
      </ScreenContainer>
    </>
  );
};

export default Dashboard;
