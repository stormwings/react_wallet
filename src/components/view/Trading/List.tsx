import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Style.scss';

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import Separator from './../../../components/dumb/Separator/Separator';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import ListItems from './../../smart/ListItems/ListItems';
import Menu from './../../smart/Menu/Menu';
import { fetchWallet } from './../../../redux/actions/walletActions';
import Button from './../../dumb/Button/Button';
import CardHeader from './../../dumb/CardHeader/CardHeader';
import IconTradingMoney from './../../../assets/svg/trading_money.svg';
import { useHistory } from 'react-router-dom';

const TradingList: FunctionComponent = () => {
  const myWallet = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch();
  const history = useHistory();
  // get user's wallet from api
  const {
    auth: { user_id }
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, []);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <div style={{ width: '95%', display: 'flex' }}>
          <CardHeader content="User Trading" subtitle="Click to buy" icon={IconTradingMoney} className="header" />
          <div className="card--header__currencies" style={{ width: '200px', display: 'flex', alignItems: 'center' }}>
            <Button content="Publish" onClick={() => history.push('/trading/publish')} />
          </div>
        </div>
        <Separator className="medium" />
        <ListItems items={myWallet.tradings} onClick={(element: any) => history.push(`/trading/buy/${element}`)} noSpan />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default TradingList;
