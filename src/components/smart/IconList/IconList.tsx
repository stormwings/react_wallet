import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import './IconList.scss';

import Icon from './../../dumb/Icon/Icon';

import IconCash from './../../../assets/svg/cash_icon.svg';
import IconBitcoinPill from './../../../assets/svg/bitcoin_pill.svg';
import IconAdd from './../../../assets/svg/add.svg';
import IconTradingMoney from './../../../assets/svg/trading_money.svg';

const IconList: FunctionComponent = () => {
  const history = useHistory();

  return (
    <div id="card--header__container">
      <Icon image={IconCash} copy="Sell" onClick={() => history.push('/charge/sell_crypto')} />
      <Icon image={IconBitcoinPill} copy="Buy" onClick={() => history.push('/charge/buy_crypto')} />
      <Icon image={IconAdd} copy="Charge" onClick={() => history.push('/charge/buy_fiat')} />
      <Icon image={IconTradingMoney} copy="Trading" onClick={() => history.push('/trading/list')} />
    </div>
  );
};

export default IconList;
