import React, { FunctionComponent } from 'react';
import './IconList.scss';

import Icon from '../../dumb/Icon/Icon';

import IconCash from './../../../assets/svg/cash_icon.svg';
import IconBitcoinPill from './../../../assets/svg/bitcoin_pill.svg';
import IconAdd from './../../../assets/svg/add.svg';
import IconTradingMoney from './../../../assets/svg/trading_money.svg';

interface IProps {}

const IconList: FunctionComponent<IProps> = props => {
  return (
    <div id="card--header__container">
      <Icon image={IconCash} copy="Sell" onClick={() => console.log('onClick')} />
      <Icon image={IconBitcoinPill} copy="Charge" onClick={() => console.log('onClick')} />
      <Icon image={IconAdd} copy="Trading" onClick={() => console.log('onClick')} />
      <Icon image={IconTradingMoney} copy="Buy" onClick={() => console.log('onClick')} />
    </div>
  );
};

export default IconList;
